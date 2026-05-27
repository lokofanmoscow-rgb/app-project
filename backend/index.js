const express = require("express");
const app = express();

app.use(express.json());

const players = [
  { id: 1, name: "Jude Bellingham", age: 21, club: "Real Madrid", value: 180 },
  { id: 2, name: "Jamal Musiala", age: 21, club: "Bayern", value: 120 }
];

app.get("/players", (req, res) => {
  res.json(players);
});

app.get("/ai-score/:id", (req, res) => {
  const player = players.find(p => p.id == req.params.id);

  const score =
    (100 - player.age) * 0.5 +
    player.value * 0.3 +
    Math.random() * 10;

  res.json({
    player: player.name,
    scoutScore: Math.round(score)
  });
});

app.listen(3001, () => console.log("Backend running on port 3001"));