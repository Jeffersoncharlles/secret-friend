

export const maskCPF = (cpf:string) => {
// Remove caracteres não numéricos
      const cpfRemove = cpf.replace(/\D/g, '');

      // Adiciona a máscara ao CPF
      const cpfResults = cpfRemove.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

      return cpfResults
}