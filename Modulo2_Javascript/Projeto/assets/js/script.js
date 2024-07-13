const carta = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

// Função para virar a carta
function flipCard()
{
  if(lockBoard) return;
  if(this === firstCard) return;

  this.classList.add('flip');
  if(!hasFlippedCard)
  {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  hasFlippedCard = false/
  checkForMatch();
}

// Função que checa se as cartas são iguais
function checkForMatch()
{
  if(firstCard.dataset.card === secondCard.dataset.card)
  {
    disableCards();
    return
  }

  unflipCards();
}

// Função que desabilita as cartas
function disableCards()
{
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

// Função que desvira as cartas
function unflipCards()
{
  lockBoard = true;

  setTimeout(() => 
    {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');

      resetBoard();
    }, 1500);
}

// Função que reseta o tabuleiro
function resetBoard()
{
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

// Função que embaralha as cartas
(function shuffle()
{
  carta.forEach((card) => 
    {
      let ramdomPosition = Math.floor(Math.random() * 12);
      card.style.order = ramdomPosition;
    })
})();

// Adiciona evento de clique na carta
carta.forEach((card) =>
  {
    card.addEventListener('click', flipCard)
  });

// Função novo jogo
function novoJogo()
{
  resetBoard();
  carta.forEach((card) => {
    card.classList.remove('flip');
    card.addEventListener('click', flipCard);
  });
  shuffle();
}

// Evento de clique no botão novo jogo
const novo_Jogo = document.getElementById('novo');
novo_Jogo.addEventListener('click', novoJogo)
