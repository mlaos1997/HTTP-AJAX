const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
let nextId = 7;

function getNewId() {
  return nextId++;
}

let friends = [
  {
    id: 1,
    name: 'Ben',
    age: 30,
    email: 'ben@lambdaschool.com',
    imageUrl: 'https://i.ytimg.com/vi/pDp_3gt1IgU/maxresdefault.jpg'
  },
  {
    id: 2,
    name: 'Austen',
    age: 32,
    email: 'austen@lambdaschool.com',
    imageUrl: 'https://www.philly.com/resizer/wM2inKEtsgVI17xxB5dEeWhyRBk=/1400x932/smart/arc-anglerfish-arc2-prod-pmn.s3.amazonaws.com/public/HKRMVCTQAVFAFMOVNYNHKKXTMM.jpg'
  },
  {
    id: 3,
    name: 'Ryan',
    age: 35,
    email: 'ryan@lambdaschool.com',
    imageUrl: 'https://pmcvariety.files.wordpress.com/2013/06/deadpool-trailer-2.jpg?w=1000'
  },
  {
    id: 4,
    name: 'Sean',
    age: 35,
    email: 'sean@lambdaschool.com',
    imageUrl: 'https://studybreaks.com/wp-content/uploads/2018/12/sb1.jpg'
  },
  {
    id: 5,
    name: 'Michelle',
    age: 67,
    email: 'michelle@gmail.com',
    imageUrl: 'https://www.wikihow.com/images/e/e8/Draw-Sandy-Cheeks-from-SpongeBob-SquarePants-Step-9.jpg'
  },
  {
    id: 6,
    name: 'Luis',
    age: 47,
    email: 'luis@lambdaschool.com',
    imageUrl: 'https://s1.dmcdn.net/tRwei/x1080-0Fd.jpg'
  },
];

app.use(cors());
app.use(bodyParser.json());

app.get('/friends', (req, res) => {
  res.status(200).json(friends);
});

app.post('/friends', (req, res) => {
  const friend = { id: getNewId(), ...req.body };
  friends = [...friends, friend];
  res.status(201).json(friends);
});

app.put('/friends/:id', (req, res) => {
  const { id } = req.params;
  let friendIndex = friends.findIndex(friend => friend.id == id);

  if (friendIndex >= 0) {
    friends[friendIndex] = { ...friends[friendIndex], ...req.body };
    res.status(200).json(friends);
  } else {
    res
      .status(404)
      .json({ message: `The friend with id ${id} does not exist.` });
  }
});

app.delete('/friends/:id', (req, res) => {
	friends = friends.filter(friend => friend.id != req.params.id);
	res.status(200).json(friends);
});

app.listen(5000, () => {
  console.log('server listening on port 5000');
});
