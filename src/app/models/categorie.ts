export class category {

    id!:number;
title!: string;
image!: string;
description !: string;
available! : boolean;
}

export class Product {
    id!: number;
    name!: string;
    image!:string;
    categoryId!: number;
    description! : string;
    price!: number;
    brand!:string;
    promotion! : number;
   }