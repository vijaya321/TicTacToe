import React, { useState } from 'react'
import './TicTacToe.css'

const TicTacToe = () => {
    const[turn, setTurn] = useState('x')
    const[values, setValues] = useState(Array(9).fill(''))
    const[winner, setWinner] = useState()

    const checkWinner = (matrixValues) => {
        const combos = {
            horizintal: [
                [1,2,3],
                [4,5,6],
                [7,8,9]
            ],
            vertical: [
                [1,4,7],
                [2,5,8],
                [3,6,9]
            ],
            diagonal: [
                [1,5,9],
                [3,5,7]
            ]
        };
        for(let combo in combos) {
             combos[combo].forEach((pattern) => {
                if(matrixValues[pattern[0]] === '' || matrixValues[pattern[1]] === '' || matrixValues[pattern[2]] === '') 
                {
                   //do nothing
                }
            else if(matrixValues[pattern[0]] === matrixValues[pattern[1]] && matrixValues[pattern[1]] === matrixValues[pattern[2]]) 
                {
                    setWinner(matrixValues[pattern[0]])
                }
             }); 
        }
      
    }

    const handleClick = (num) => {
        // window.alert(num + ' clicked');
        let matrixValues = [...values]
        if(matrixValues[num] !== ''){
            window.alert('Already Clicked!')
            return
        }
        
        if(turn === 'x') {
            matrixValues[num] = 'x'
            setTurn('o')
        } else {
            matrixValues[num] = 'o'
            setTurn('x')
        }
        checkWinner(matrixValues)
        setValues(matrixValues)
    }

    const handleReset = () => {
        setValues(Array(9).fill(''))
        setWinner()
    }

    const Cell  = ({ num }) => {  
        return (
            <td onClick={() => handleClick(num)}>{values[num]}</td>
        )
    }
    return (
        <div className='container'>
            <h1>Tic-Tac-Toe</h1>
            <h3> Next turn: {turn} </h3>
            {winner && <>
                <h2>{winner} is the winner</h2>
                <button onClick={() => handleReset()}> Restart </button>
            </> }
            <table>
                <tbody>
                    <tr> 
                        <Cell num={0} /> <Cell num={1} /> <Cell num={2} /> 
                    </tr>
                    <tr> 
                        <Cell num={3} /> <Cell num={4} /> <Cell num={5} /> 
                    </tr>
                    <tr> 
                        <Cell num={6} /> <Cell num={7} /> <Cell num={8} /> 
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TicTacToe