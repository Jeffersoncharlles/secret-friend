'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signUp } from "@/lib/api/admin";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";



export function InputLogin() {
  const router = useRouter()


  const [isLoading, setIsLoading] = useState(false)
  const [warning, setWarning] = useState('')
  const [passwordInput, setPasswordInput] = useState('')

  const handleLoginButton = async () => {
    try {
      setIsLoading(true)
      if (passwordInput) {
        setWarning('')

        const token = await signUp(passwordInput)

        if (!token) {
          setWarning('Acesso negado!')
          toast.warning('Acesso negado!')
        }

        setCookie('token', token)
        router.push('/admin')
      }

    } catch (error) {
      toast.error('Ocorreu um erro tente mais tarde!.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <label htmlFor="password" className="m-2 text-2xl text-primary">Digite Sua senha secreta!</label>
      <Input
        id="password"
        className="bg-muted placeholder:text-zinc-400 rounded w-80"
        placeholder="Digite password..."
        type="password"
        value={passwordInput}
        onChange={e => setPasswordInput(e.target.value)}
        disabled={isLoading}

      />
      {warning && (
        <p className="m-2 text-rose-400">{warning}</p>
      )}
      <Button
        className="mt-4 rounded"
        onClick={handleLoginButton}
        disabled={isLoading}

      >
        Entrar
      </Button>
    </>
  );
}
