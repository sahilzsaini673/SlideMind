import { NextResponse } from "next/server";
import User from "@/app/models/User";

export async function POST(req) {
  console.log("getting Image...")
  try {
    const { email } = await req.json();
    console.log("user Email:- ", email);

    const user = await User.findOne({ email });

    console.log(user?.image);

    return NextResponse.json({ image: user?.image });
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { response: "Something went wrong." },
      { status: 500 }
    );
  }
}
