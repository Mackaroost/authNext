import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    if (!data.name || !data.email || !data.password) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const existingEmail = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (existingEmail) {
      return NextResponse.json({ error: "Email already exists" }, { status: 400 });
    }

    const existingName = await prisma.user.findFirst({
      where: {
        name: data.name,
      },
    });

    if (existingName) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    const newUser = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
      },
    });

    const { password: _, ...user } = newUser;

    return NextResponse.json({ message: "User created", user }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
