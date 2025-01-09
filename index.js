// Função que calcula o saldo e retorna o nível
function calcularNivel(vitorias, derrotas) {
    // Variavel que calcula o saldo de vitórias
    let saldoVitorias = vitorias - derrotas;
  
    // Determina o nível com base na quantidade de vitórias
    let nivel;
    if (vitorias < 10) {
      nivel = "Ferro";
    } else if (vitorias >= 10 && vitorias <= 20) {
      nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
      nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
      nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
      nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
      nivel = "Lendário";
    } else if (vitorias >= 101) {
      nivel = "Imortal";
    }
  
    // Exibe a mensagem final
    console.log(`O Herói tem de saldo ${saldoVitorias} pontos e está no nível ${nivel}`);
  }
  
  // Exemplo com 85 vitórias e 30 derrotas
  calcularNivel(85, 30);