'use client'

import { Input } from "@/components/ui/input";
import { useState } from "react";


export default function Login() {
    const [passwordInput, setPasswordInput] = useState('')


    return (
        <div className="border h-screen border-zinc-100 items-center flex justify-center">
            <div className="flex flex-col h-80  justify-center">
                <h1 className="m-2 text-2xl text-primary">Digite Sua senha secreta!</h1>
                <Input
                    className="bg-muted placeholder:text-zinc-400 rounded w-80"
                    placeholder="Digite password"
                    type="password"
                    value={passwordInput}
                    onChange={e => setPasswordInput(e.target.value)}

                />
                {/* <p className="m-2 text-rose-400">Error password invalid!</p> */}
            </div>
        </div>
    );
}
