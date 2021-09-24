/*
 * Name: Nisar Makdum.
 * Date: 25 September 2021.
*/

import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
const Participants = () => {
    let totalWon = 0;
    const [participants, setParticipants] = useState([])
    const [gamesInfo, setgamesInfo] = useState([]);

    const participantsInfos = Object.keys(participants).map((data, index) => participants[index + 1]);

    const games = Object.keys(gamesInfo).map((data, index) => gamesInfo[index]);
    participantsInfos.pop();
    games.shift()

    console.log(participantsInfos);


    useEffect(() => {
        fetch('https://murmuring-chamber-68439.herokuapp.com/participantsDetails')
            .then(res => res.json())
            .then(data => setParticipants(data[0]))
    }, [])

    useEffect(() => {
        fetch('https://murmuring-chamber-68439.herokuapp.com/gamesDetails')
            .then(res => res.json())
            .then(data => {
                setgamesInfo(data[0])
            })
    }, [])


    const handleModal = (participant, len) => {

        Swal.fire({
            title: `${participant.First_Name} ${participant.Last_Name}`,
            text: `Total played-${len} , Total Won-${len}`,
            imageUrl: `${participant.image}`,
            imageWidth: 100,
            imageHeight: 100,
            width: 600,
            height: 200
        })
    }

    const handleHighLight = (e, participant, gameInfo) => {
        let one = document.getElementById('0')
        let two = document.getElementById('1')
        let three = document.getElementById('2')
        let four = document.getElementById('3')
        let five = document.getElementById('4')
        let six = document.getElementById('5')
        let seven = document.getElementById('6')
        let eight = document.getElementById('7')
        let nine = document.getElementById('8')
        let ten = document.getElementById('9')

        if (e.target.parentNode === one) {
            one.style.backgroundColor = "green";
            two.style.backgroundColor = "transparent";
            three.style.backgroundColor = "transparent";
            four.style.backgroundColor = "transparent";
            five.style.backgroundColor = "transparent";
            six.style.backgroundColor = "transparent";
            seven.style.backgroundColor = "transparent";
            eight.style.backgroundColor = "transparent";
            nine.style.backgroundColor = "transparent";
            ten.style.backgroundColor = "transparent";
        }
        if (e.target.parentNode === two) {
            one.style.backgroundColor = "transparent";
            two.style.backgroundColor = "green";
            three.style.backgroundColor = "transparent";
            four.style.backgroundColor = "transparent";
            five.style.backgroundColor = "transparent";
            six.style.backgroundColor = "transparent";
            seven.style.backgroundColor = "transparent";
            eight.style.backgroundColor = "transparent";
            nine.style.backgroundColor = "transparent";
            ten.style.backgroundColor = "transparent";
        }
        if (e.target.parentNode === three) {
            one.style.backgroundColor = "transparent";
            two.style.backgroundColor = "transparent";
            three.style.backgroundColor = "green";
            four.style.backgroundColor = "transparent";
            five.style.backgroundColor = "transparent";
            six.style.backgroundColor = "transparent";
            seven.style.backgroundColor = "transparent";
            eight.style.backgroundColor = "transparent";
            nine.style.backgroundColor = "transparent";
            ten.style.backgroundColor = "transparent";
        }
        if (e.target.parentNode === four) {
            one.style.backgroundColor = "transparent";
            two.style.backgroundColor = "transparent";
            three.style.backgroundColor = "transparent";
            four.style.backgroundColor = "green";
            five.style.backgroundColor = "transparent";
            six.style.backgroundColor = "transparent";
            seven.style.backgroundColor = "transparent";
            eight.style.backgroundColor = "transparent";
            nine.style.backgroundColor = "transparent";
            ten.style.backgroundColor = "transparent";
        }
        if (e.target.parentNode === five) {
            one.style.backgroundColor = "transparent";
            two.style.backgroundColor = "transparent";
            three.style.backgroundColor = "transparent";
            four.style.backgroundColor = "transparent";
            five.style.backgroundColor = "green";
            six.style.backgroundColor = "transparent";
            seven.style.backgroundColor = "transparent";
            eight.style.backgroundColor = "transparent";
            nine.style.backgroundColor = "transparent";
            ten.style.backgroundColor = "transparent";
        }
        if (e.target.parentNode === six) {
            one.style.backgroundColor = "transparent";
            two.style.backgroundColor = "transparent";
            three.style.backgroundColor = "transparent";
            four.style.backgroundColor = "transparent";
            five.style.backgroundColor = "green";
            six.style.backgroundColor = "transparent";
            seven.style.backgroundColor = "transparent";
            eight.style.backgroundColor = "transparent";
            nine.style.backgroundColor = "transparent";
            ten.style.backgroundColor = "transparent";
        }
        if (e.target.parentNode === six) {
            one.style.backgroundColor = "transparent";
            two.style.backgroundColor = "transparent";
            three.style.backgroundColor = "transparent";
            four.style.backgroundColor = "transparent";
            five.style.backgroundColor = "transparent";
            six.style.backgroundColor = "green";
            seven.style.backgroundColor = "transparent";
            eight.style.backgroundColor = "transparent";
            nine.style.backgroundColor = "transparent";
            ten.style.backgroundColor = "transparent";
        }
        if (e.target.parentNode === seven) {
            one.style.backgroundColor = "transparent";
            two.style.backgroundColor = "transparent";
            three.style.backgroundColor = "transparent";
            four.style.backgroundColor = "transparent";
            five.style.backgroundColor = "transparent";
            six.style.backgroundColor = "transparent";
            seven.style.backgroundColor = "green";
            eight.style.backgroundColor = "transparent";
            nine.style.backgroundColor = "transparent";
            ten.style.backgroundColor = "transparent";
        }
        if (e.target.parentNode === eight) {
            one.style.backgroundColor = "transparent";
            two.style.backgroundColor = "transparent";
            three.style.backgroundColor = "transparent";
            four.style.backgroundColor = "transparent";
            five.style.backgroundColor = "transparent";
            six.style.backgroundColor = "transparent";
            seven.style.backgroundColor = "transparent";
            eight.style.backgroundColor = "green";
            nine.style.backgroundColor = "transparent";
            ten.style.backgroundColor = "transparent";
        }
        if (e.target.parentNode === nine) {
            one.style.backgroundColor = "transparent";
            two.style.backgroundColor = "transparent";
            three.style.backgroundColor = "transparent";
            four.style.backgroundColor = "transparent";
            five.style.backgroundColor = "transparent";
            six.style.backgroundColor = "transparent";
            seven.style.backgroundColor = "transparent";
            eight.style.backgroundColor = "transparent";
            nine.style.backgroundColor = "green";
            ten.style.backgroundColor = "transparent";
        }
        if (e.target.parentNode === ten) {
            one.style.backgroundColor = "transparent";
            two.style.backgroundColor = "transparent";
            three.style.backgroundColor = "transparent";
            four.style.backgroundColor = "transparent";
            five.style.backgroundColor = "transparent";
            six.style.backgroundColor = "transparent";
            seven.style.backgroundColor = "transparent";
            eight.style.backgroundColor = "transparent";
            nine.style.backgroundColor = "transparent";
            ten.style.backgroundColor = "green";
        }
        let winnerTotalScore = 0;
        gameInfo.forEach(item => {
            winnerTotalScore = winnerTotalScore + Number(item.winner_score)
        })

        const oppositeTeamOne = gameInfo[0]?.looser_id;
        const oppositeTeamOneScore = gameInfo[0]?.looser_score;
        const oppositeTeamTwo = gameInfo[1]?.looser_id;
        const oppositeTeamTwoScore = gameInfo[1]?.looser_score;
        const length = gameInfo.length;
        const oppositePlayerOne = participantsInfos.find(player => oppositeTeamOne === player.id);
        const oppositePlayerTwo = participantsInfos.find(player => oppositeTeamTwo === player.id);
        console.log(oppositePlayerOne);
        const fullName = document.getElementById('fullName');
        fullName.innerText = `${participant.First_Name} ${participant.Last_Name} - Total Score (${winnerTotalScore})`;

        //losers
        const loserOne = document.getElementById('loserOne');
        loserOne.innerText = `${oppositePlayerOne.First_Name} ${oppositePlayerOne.Last_Name} - Score (${oppositeTeamOneScore})`;
        const loserTwo = document.getElementById('loserTwo');
        loserTwo.innerText = `${oppositePlayerTwo.First_Name} ${oppositePlayerTwo.Last_Name} - Score (${oppositeTeamTwoScore})`;

        //totalPlayed
        const totalPlayed = document.getElementById('totalPlayed');
        totalPlayed.innerText = `Total Match ${length}`;

        //card
        const card = document.getElementById('card');
        card.style.display = 'block'
    }

    return (
        <div data-testid="test-GetParticipants" className="container">
            <div className="row">
                <div className="col-md-8 p-0">
                    <table className="table mt-5 text-white border">
                        <thead>
                            <tr>
                                <th className="text-light text-left" scope="col">Sr No</th>
                                <th className="text-light" scope="col">Name</th>
                                <th className="text-light" scope="col">Played/Won</th>
                                <th className="text-light" scope="col">Info</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                participantsInfos.map((participant, index) => {
                                    let len = games[index]?.length;
                                    let gameInfo = games[index];
                                    return (
                                        <tr id={`${index}`}>
                                            <th scope="row">{index + 1}</th>

                                            <td style={{ cursor: 'pointer' }} onClick={() => handleModal(participant, len)}>{participant.First_Name}
                                                {participant.Last_Name}
                                            </td>
                                            <td>
                                                <span>{games[index]?.length}/</span>
                                                <span>{games[index]?.length}</span>
                                            </td>
                                            <td style={{ cursor: 'pointer' }} onClick={(e) => handleHighLight(e, participant, gameInfo)} className='text-info text-decoration-underline'>Select</td>
                                        </tr>
                                    )
                                }
                                )
                            }

                        </tbody>
                    </table>
                </div>
                <div className="col-md-4 mt-5 p-0">
                    <div id='card' class="card bg-dark" style={{ display: 'none', marginTop: "120px" }}>
                        <div class="card-body ">
                            <p class="card-text text-info text-bold py-0 my-0 fw-bolder">Winner</p>
                            <p id='fullName' class="card-text text-info fw-bold"></p>
                            <p id='totalPlayed' class="card-text  fw-bold"></p>
                            <table className='table-dark container'>
                                <tr>
                                    <th className="text-danger">Loser</th>
                                </tr>
                                <tr>
                                    <td id='loserOne' className="text-danger"></td>
                                </tr>
                                <tr>
                                    <td id='loserTwo' className="text-danger"></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Participants;