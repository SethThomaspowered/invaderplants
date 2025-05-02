import React, { useState, useEffect } from 'react';
import { Trophy } from 'lucide-react';
import { invasivePlants, Plant } from '../data/plants';

interface Card {
  id: string;
  content: string;
  type: 'image' | 'name';
  plantId: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const PlantMatch: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<Card[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<number>(0);
  const [moves, setMoves] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('easy');
  const [isStarted, setIsStarted] = useState<boolean>(false);

  // Prepare the game based on difficulty
  const prepareGame = (selectedDifficulty: 'easy' | 'medium' | 'hard') => {
    // Filter plants based on difficulty
    let plantsForGame: Plant[];
    
    if (selectedDifficulty === 'easy') {
      plantsForGame = invasivePlants.filter(p => p.difficultyLevel === 'easy').slice(0, 3);
    } else if (selectedDifficulty === 'medium') {
      plantsForGame = invasivePlants.filter(p => ['easy', 'medium'].includes(p.difficultyLevel)).slice(0, 4);
    } else {
      plantsForGame = invasivePlants.slice(0, 6);
    }

    // Create card pairs (image and name)
    const cardPairs: Card[] = [];
    
    plantsForGame.forEach(plant => {
      // Image card
      cardPairs.push({
        id: `image-${plant.id}`,
        content: plant.imageUrl,
        type: 'image',
        plantId: plant.id,
        isFlipped: false,
        isMatched: false
      });
      
      // Name card
      cardPairs.push({
        id: `name-${plant.id}`,
        content: plant.reverseName,
        type: 'name',
        plantId: plant.id,
        isFlipped: false,
        isMatched: false
      });
    });
    
    // Shuffle cards
    const shuffledCards = [...cardPairs].sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
    setFlippedCards([]);
    setMatchedPairs(0);
    setMoves(0);
    setGameOver(false);
    setIsStarted(true);
  };

  // Handle card click
  const handleCardClick = (clickedCard: Card) => {
    // Ignore if card is already flipped or matched
    if (clickedCard.isFlipped || clickedCard.isMatched || flippedCards.length >= 2) {
      return;
    }

    // Flip the card
    const updatedCards = cards.map(card => 
      card.id === clickedCard.id ? { ...card, isFlipped: true } : card
    );
    setCards(updatedCards);

    // Add to flipped cards
    const newFlippedCards = [...flippedCards, clickedCard];
    setFlippedCards(newFlippedCards);

    // If we have 2 flipped cards, check for a match
    if (newFlippedCards.length === 2) {
      setMoves(prev => prev + 1);
      
      // Check if cards match (same plantId)
      if (newFlippedCards[0].plantId === newFlippedCards[1].plantId) {
        setTimeout(() => {
          // Mark cards as matched
          const matchedCards = cards.map(card => 
            card.plantId === newFlippedCards[0].plantId 
              ? { ...card, isMatched: true, isFlipped: false } 
              : card
          );
          setCards(matchedCards);
          setFlippedCards([]);
          setMatchedPairs(prev => prev + 1);
          
          // Check if game is over
          if (matchedPairs + 1 === cards.length / 2) {
            setGameOver(true);
          }
        }, 1000);
      } else {
        // Not a match, flip cards back
        setTimeout(() => {
          const resetCards = cards.map(card => 
            (card.id === newFlippedCards[0].id || card.id === newFlippedCards[1].id) 
              ? { ...card, isFlipped: false } 
              : card
          );
          setCards(resetCards);
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  return (
    <div className="min-h-screen bg-green-50 py-10 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold text-center mb-6 text-green-800">Invasive Plant Matching Game</h1>
        
        {!isStarted ? (
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Select Difficulty</h2>
            <p className="mb-6 text-gray-600">
              Match the invasive plant pictures with their names. The harder the difficulty, the more plants you'll need to match!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <button 
                onClick={() => {
                  setDifficulty('easy');
                  prepareGame('easy');
                }}
                className="px-6 py-3 bg-green-100 text-green-800 rounded-lg font-bold hover:bg-green-200 transition-colors"
              >
                Easy (3 plants)
              </button>
              <button 
                onClick={() => {
                  setDifficulty('medium');
                  prepareGame('medium');
                }}
                className="px-6 py-3 bg-yellow-100 text-yellow-800 rounded-lg font-bold hover:bg-yellow-200 transition-colors"
              >
                Medium (4 plants)
              </button>
              <button 
                onClick={() => {
                  setDifficulty('hard');
                  prepareGame('hard');
                }}
                className="px-6 py-3 bg-red-100 text-red-800 rounded-lg font-bold hover:bg-red-200 transition-colors"
              >
                Hard (6 plants)
              </button>
            </div>
            <p className="text-sm text-gray-500">
              Tip: Start with Easy to learn the plants, then challenge yourself with harder levels!
            </p>
          </div>
        ) : gameOver ? (
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="flex justify-center mb-4">
              <Trophy className="h-16 w-16 text-yellow-500" />
            </div>
            <h2 className="text-3xl font-bold mb-2 text-green-800">Congratulations!</h2>
            <p className="text-xl mb-4">You matched all the plants in {moves} moves!</p>
            <p className="mb-6 text-gray-600">
              Great job identifying these invasive plants! The more you practice, the better you'll get at spotting them in the wild.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={() => prepareGame(difficulty)}
                className="px-6 py-3 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition-colors"
              >
                Play Again
              </button>
              <button 
                onClick={() => setIsStarted(false)}
                className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-bold hover:bg-gray-300 transition-colors"
              >
                Change Difficulty
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-6">
              <div className="bg-white px-4 py-2 rounded-lg shadow">
                <span className="font-bold text-green-800">Pairs: </span>
                <span>{matchedPairs} / {cards.length / 2}</span>
              </div>
              <div className="bg-white px-4 py-2 rounded-lg shadow">
                <span className="font-bold text-green-800">Moves: </span>
                <span>{moves}</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {cards.map(card => (
                <div 
                  key={card.id}
                  onClick={() => handleCardClick(card)}
                  className={`relative h-32 sm:h-40 cursor-pointer rounded-lg transform transition-transform ${
                    card.isFlipped ? 'rotate-y-180' : ''
                  } ${card.isMatched ? 'opacity-60' : ''}`}
                >
                  {/* Card Back */}
                  <div 
                    className={`absolute inset-0 bg-green-600 rounded-lg shadow flex items-center justify-center transition-opacity duration-300 ${
                      card.isFlipped ? 'opacity-0' : 'opacity-100'
                    }`}
                  >
                    <span className="text-white text-xl font-bold">?</span>
                  </div>
                  
                  {/* Card Front */}
                  <div 
                    className={`absolute inset-0 bg-white rounded-lg shadow flex items-center justify-center transition-opacity duration-300 ${
                      card.isFlipped ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    {card.type === 'image' ? (
                      <img 
                        src={card.content} 
                        alt="Plant" 
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <div className="text-center p-2">
                        <h3 className="text-lg font-bold text-green-800">{card.content}</h3>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <button 
                onClick={() => prepareGame(difficulty)}
                className="px-4 py-2 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition-colors"
              >
                Restart Game
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PlantMatch;