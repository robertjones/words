var root = document.body

const words = [
  {word: 'ant', pic: '🐜'}, 
  {word: 'bag', pic: '👜'}, 
  {word: 'bat', pic: '🦇'}, 
  {word: 'bed', pic: '🛏️'}, 
  {word: 'bird', pic: '🐦'}, 
  {word: 'box', pic: '📦'}, 
  {word: 'boy', pic: '👦'}, 
  {word: 'bug', pic: '🐛'}, 
  {word: 'bus', pic: '🚌'}, 
  {word: 'can', pic: '🥫'}, 
  {word: 'car', pic: '🚗'}, 
  {word: 'cat', pic: '🐈'}, 
  {word: 'clock', pic: '⏰'}, 
  {word: 'cow', pic: '🐄'}, 
  {word: 'cup', pic: '☕'}, 
  {word: 'dad', pic: '👨'}, 
  {word: 'dog', pic: '🐕'}, 
  {word: 'egg', pic: '🥚'}, 
  {word: 'fox', pic: '🦊'}, 
  {word: 'frog', pic: '🐸'}, 
  {word: 'girl', pic: '👧'}, 
  {word: 'hand', pic: '🖐️'}, 
  {word: 'hat', pic: '👒'}, 
  {word: 'hen', pic: '🐔'}, 
  {word: 'king', pic: '🤴'}, 
  {word: 'leg', pic: '🦵'}, 
  {word: 'mad', pic: '😡'}, 
  {word: 'man', pic: '👴'}, 
  {word: 'map', pic: '🗺️'}, 
  {word: 'milk', pic: '🥛'}, 
  {word: 'mum', pic: '👩'}, 
  {word: 'nut', pic: '🥜'}, 
  {word: 'pen', pic: '🖊️'}, 
  {word: 'pig', pic: '🐖'}, 
  {word: 'rat', pic: '🐀'}, 
  {word: 'red', pic: '🔴'}, 
  {word: 'rod', pic: '🎣'}, 
  {word: 'run', pic: '🏃'}, 
  {word: 'sock', pic: '🧦'}, 
  {word: 'sun', pic: '☀️'}, 
  {word: 'ten', pic: '🔟'}, 
  {word: 'up', pic: '⬆️'}, 
  {word: 'web', pic: '🕸️'}, 
]

const choice = (arr, num=1) => {
  let selection = Math.floor(Math.random() * arr.length)
  let before = arr.slice(0,selection)
  let after = arr.slice(selection+1)
  return num <= 0 ? [] : [arr[selection]].concat(choice(before.concat(after) , num-1)) 
}

const probgen = () => {
  let options = choice(words, 4)
  return {options: options, ans: choice(options)[0]}
}

var prob = probgen()
var msg = ""
var dis = []

const numclick = (option, ans) => {
  if (option == ans) {
    prob = probgen()
    msg = msg == "☹️" ? "😃" : msg + "😃"
    dis = []
  } else {
    msg = "☹️"
    dis.push(option)
  }
}

var Game = {
  view: () => {
    return m("div", [
      m("p", {class: "text-gray-900", style: "font-size: 6rem;"}, prob.ans.word),
      m("table", {class: "self-center mx-auto my-2"},  
        [0,1].map(x => m("tr", prob.options.slice(x*2, x*2 + 2).map(option => m("td",  {class: "p-2"}, m("button", {onclick: () => numclick(option.pic, prob.ans.pic), style: "width: 8rem", class: dis.includes(option.pic) ? "bg-red-200 text-gray-800 font-semibold text-6xl rounded py-2 shadow-md border border-red-500" : "bg-white text-gray-800 font-semibold text-6xl rounded border border-blue-400 py-2 shadow-md"}, dis.includes(option.pic) ? "❌" : option.pic)))
        )
      )),
      m("p", {class: "text-6xl"}, msg)
    ])
  }
}

m.mount(root, Game)