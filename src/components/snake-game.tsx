
"use client";

import { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { LogOut } from 'lucide-react';

interface SnakeGameProps {
  onExit: () => void;
}

const GRID_SIZE = 20;
const CANVAS_SIZE = 400;
const TILE_SIZE = CANVAS_SIZE / GRID_SIZE;
const INITIAL_SPEED = 200;

export default function SnakeGame({ onExit }: SnakeGameProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState({ x: 15, y: 15 });
  const [direction, setDirection] = useState<{ x: number, y: number }>({ x: 0, y: -1 }); // Start moving up
  const [speed, setSpeed] = useState(INITIAL_SPEED);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const generateFood = () => {
    const newFood = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE)
    };
    // Ensure food doesn't spawn on the snake
    if (snake.some(segment => segment.x === newFood.x && segment.y === newFood.y)) {
      return generateFood();
    }
    return newFood;
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
        if (isGameOver) return;

        switch (e.key) {
            case 'ArrowUp':
                if (direction.y === 0) setDirection({ x: 0, y: -1 });
                break;
            case 'ArrowDown':
                if (direction.y === 0) setDirection({ x: 0, y: 1 });
                break;
            case 'ArrowLeft':
                if (direction.x === 0) setDirection({ x: -1, y: 0 });
                break;
            case 'ArrowRight':
                if (direction.x === 0) setDirection({ x: 1, y: 0 });
                break;
            case 'Escape':
                onExit();
                break;
        }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [direction, isGameOver, onExit]);


  useEffect(() => {
    if (isGameOver) return;

    const gameLoop = setInterval(() => {
      setSnake(prevSnake => {
        const newSnake = [...prevSnake];
        const head = { ...newSnake[0] };
        head.x += direction.x;
        head.y += direction.y;

        // Wall collision
        if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
          setIsGameOver(true);
          return prevSnake;
        }

        // Self collision
        for (let i = 1; i < newSnake.length; i++) {
          if (head.x === newSnake[i].x && head.y === newSnake[i].y) {
            setIsGameOver(true);
            return prevSnake;
          }
        }
        
        newSnake.unshift(head);

        // Food collision
        if (head.x === food.x && head.y === food.y) {
          setScore(s => s + 1);
          setFood(generateFood());
          // Increase speed
          if (speed > 50) setSpeed(s => s - 5);
        } else {
          newSnake.pop();
        }
        
        return newSnake;
      });
    }, speed);

    return () => clearInterval(gameLoop);
  }, [snake, direction, food, speed, isGameOver]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    
    // Draw Grid (optional, for aesthetics)
    ctx.strokeStyle = '#222';
    for(let i = 0; i <= GRID_SIZE; i++) {
        ctx.beginPath();
        ctx.moveTo(i * TILE_SIZE, 0);
        ctx.lineTo(i * TILE_SIZE, CANVAS_SIZE);
        ctx.moveTo(0, i * TILE_SIZE);
        ctx.lineTo(CANVAS_SIZE, i * TILE_SIZE);
        ctx.stroke();
    }


    // Draw snake
    ctx.fillStyle = 'lime';
    snake.forEach(segment => {
      ctx.fillRect(segment.x * TILE_SIZE, segment.y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    });

    // Draw food
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x * TILE_SIZE, food.y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
  }, [snake, food]);
  
  const resetGame = () => {
      setSnake([{ x: 10, y: 10 }]);
      setFood({ x: 15, y: 15 });
      setDirection({ x: 0, y: -1 });
      setSpeed(INITIAL_SPEED);
      setScore(0);
      setIsGameOver(false);
  }

  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-black text-green-400 font-code relative">
        <h1 className="text-4xl font-bold mb-4">SNAKE</h1>
        <canvas
            ref={canvasRef}
            width={CANVAS_SIZE}
            height={CANVAS_SIZE}
            className="border-2 border-green-500"
        />
         <div className="flex justify-between w-[400px] mt-4">
            <p className="text-xl">Score: {score}</p>
            <p className="text-xs text-gray-500">Use Arrow Keys to Move</p>
        </div>
        
        {isGameOver && (
            <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center">
                <h2 className="text-5xl text-red-500 font-bold">GAME OVER</h2>
                <p className="text-2xl mt-4">Your Score: {score}</p>
                <Button onClick={resetGame} className="mt-8">Play Again</Button>
            </div>
        )}
        
        <div className="absolute top-4 right-4 z-10">
            <Button onClick={onExit} variant="destructive">
                <LogOut className="mr-2 h-4 w-4" />
                Exit Game
            </Button>
        </div>
    </div>
  );
}
