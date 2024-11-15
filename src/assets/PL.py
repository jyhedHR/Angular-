import csv
import random
import time

# Paramètres de l'algorithme génétique
POPULATION_SIZE = 100  # Taille de la population
MUTATION_RATE = 0.01  # Taux de mutation
GENERATIONS = 1000  # Nombre maximum de générations

# Chargement des fichiers CSV
def load_csv(filename):
    data = {}
    with open(filename, mode='r') as file:
        csv_reader = csv.DictReader(file)
        for row in csv_reader:
            key = row['id']  # Suppose que chaque fichier a un champ 'id'
            data[key] = row
    return data

# Fonction d'évaluation de la fitness (différence entre deux bases)
def fitness(base_a, individual_b):
    score = 0
    for key in base_a.keys():
        if base_a[key] == individual_b.get(key, None):
            score += 1
    return score

# Génération initiale d'une solution (un mapping de base A avec base B)
def generate_individual(base_a, base_b):
    return {key: base_b.get(key, None) for key in base_a.keys()}

# Sélection des parents (roulette wheel selection)
def select_parents(population, base_a):
    weights = [fitness(base_a, individual) for individual in population]
    total_fitness = sum(weights)
    if total_fitness == 0:
        return random.choice(population), random.choice(population)
    parents = random.choices(population, weights=weights, k=2)
    return parents[0], parents[1]

# Croisement (crossover)
def crossover(parent1, parent2):
    crossover_point = random.randint(0, len(parent1) - 1)
    child = {key: parent1[key] if i < crossover_point else parent2[key]
             for i, key in enumerate(parent1.keys())}
    return child

# Mutation
def mutate(individual):
    for key in individual.keys():
        if random.random() < MUTATION_RATE:
            individual[key] = random.choice(list(individual.values()))  # Mutation aléatoire
    return individual

# Algorithme génétique pour la synchronisation
def genetic_sync(base_a, base_b):
    population = [generate_individual(base_a, base_b) for _ in range(POPULATION_SIZE)]
    
    for generation in range(GENERATIONS):
        # Trier la population par fitness
        population = sorted(population, key=lambda ind: fitness(base_a, ind), reverse=True)
        
        # Si la synchronisation est parfaite
        if fitness(base_a, population[0]) == len(base_a):
            print(f"Synchronisation parfaite en {generation} générations.")
            return population[0]
        
        # Génération suivante
        next_generation = population[:2]  # Elitisme (garder les 2 meilleurs)
        for _ in range(POPULATION_SIZE // 2 - 1):
            parent1, parent2 = select_parents(population, base_a)
            child = crossover(parent1, parent2)
            child = mutate(child)
            next_generation.append(child)
        
        population = next_generation
    
    return population[0]  # Meilleure solution après les générations

# Fonction pour écrire le résultat dans un fichier CSV
def write_to_csv(filename, data):
    with open(filename, mode='w', newline='') as file:
        fieldnames = ['id'] + list(next(iter(data.values())).keys())  # Colonnes à partir des données
        writer = csv.DictWriter(file, fieldnames=fieldnames)

        writer.writeheader()  # Écrire les en-têtes de colonne
        for key, value in data.items():
            writer.writerow({'id': key, **value})  # Écrire chaque ligne de données

# Charger les données CSV
base_a = load_csv('base_c.csv')
base_b = load_csv('base_d.csv')

# Exécuter l'algorithme génétique pour synchroniser les deux bases
start_time = time.time()
result = genetic_sync(base_a, base_b)
end_time = time.time()

# Écrire le résultat dans un fichier CSV
write_to_csv('synchronization_result.csv', result)

print("Résultat final de la synchronisation écrit dans 'synchronization_result.csv'")
print(f"Temps d'exécution : {end_time - start_time:.2f} secondes")

