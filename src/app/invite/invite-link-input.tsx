'use client' // Funcionalidade do Next que libera o envio do JavaScript desse componente quando ele for carregado. Usado nesse caso, já que temos um botão que precisa da interação do usuário e, portanto, o JavaScript necessário para tal ação

import { IconButton } from '@/components/icon-button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { Copy, Link } from 'lucide-react'

interface InviteLinkInputProps {
  inviteLink: string
}

export function InviteLinkInput({ inviteLink }: InviteLinkInputProps) {
  function copyInviteLinn() {
    navigator.clipboard.writeText(inviteLink) // Função que copia o conteúdo de 'inviteLink'
  }

  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>
      <InputField readOnly defaultValue={inviteLink} />

      <IconButton className="-mr-2">
        <Copy className="size-5" onClick={copyInviteLinn} />
      </IconButton>
    </InputRoot>
  )
}
