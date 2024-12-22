"use server"
import { auth } from "@clerk/nextjs";
import db from "../db";
import { Prisma } from '@prisma/client'
import { context } from "@react-three/fiber";

export  async function ListSnippets(){
      const { userId } = auth()
    
      if (!userId) {
        return false
      }
    try {
        const response = await db.snippet.findMany({
            where:  {
                userId: userId
            }
        });
        return response
    } catch (error) {
        console.log(error)
        return
    }
}

export async function AddSnippetToDB(name: string, content: string, userId: string, language: string){
    db.snippet.create({
        data: {
            name: name,
            content: content,   
            language: language,
            user:{
                connect: {
                    id: userId
                }
            }
            
        },
        include: {
            user: true,
        }
    })
}