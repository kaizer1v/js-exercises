/**

LINK: https://eloquentjavascript.net/07_robot.html

Our project in this chapter is to build an automaton,a little program that performs
a task in a virtual world. Our automaton will be a mail-delivery robot picking up and
dropping off parcels.

Here's a map of the town
https://eloquentjavascript.net/img/village2x.png

and names of the houses

P - Post Office
A - Alice's House
B - Bob's House
C - Cabin
D - Daria's House
E - Ernie's House
F - Farm
G - Grete's House
M - Marketplace

**/

// The roads / paths of 1 unit are defined by this variable
const roads = [
  "Alice's House-Bob's House", "Alice's House-Cabin", "Alice's House-Post Office",
  "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House",
  "Grete's House-Farm", "Grete's House-Shop",
  "Marketplace-Farm", "Marketplace-Post Office", "Marketplace-Shop", "Marketplace-Town Hall",
  "Shop-Town Hall"
];

/* but the above isn't very useful yet. Instead, what we would need is a way to know
    the locations we can go to form a given point. So, let's convert it to a desired structure
*/
function buildGraph(edges) {
  let graph = Object.create(null);

  function addEdge(from, to) {
    if(graph[from] == null) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }

  for(let [from, to] of edges.map(r => r.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
}

const roadGraph = buildGraph(roads);


class VillageState {
  constructor(place, parcels) {
    this.place = place
    this.parcels = parcels
  }

  move(destination) {
    // checks whether there is a road going from the current place to the destination
    //  if not, then return the old state, since there is no valid move
    if(!roadGraph[this.place].includes(destination)) return this

    // create a new set of parcels—parcels that the robot is carrying 
    //  (that are at the robot’s current place)
    //  need to be moved along to the new place.
    // Eg: parcels = [{ place: 'farm', address: 'Daria\'s House' }, ... ]
    let parcels = this.parcels.map(p => {
      if(p.place != this.place) return p
      return { place: destination, address: p.address }
    }).filter(p => p.place != p.address)

    // creates a new state with the destination as the robot’s new place
    return new VillageState(destination, parcels)
  }
}

VillageState.random = function(parcelCount = 5) {
  let parcels = []
  for(let i = 0; i < parcelCount; i++) {
    let address = randomPick(Object.keys(roadGraph))
    let place
    do {
      place = randomPick(Object.keys(roadGraph))
    } while(place == address)
    parcels.push({ place, address })
  }
  return new VillageState("Post Office", parcels)
}

let first = new VillageState("Post Office", [
  { place: "Post Office", address: "Alice's House" }
])
let next = first.move("Alice's House")

console.log(next)

function runRobot(state, robot, memory) {
  let turn;
  for (turn = 0; turn < state.parcels.length; turn++) {
    let action = robot(state, memory)
    memory = action.memory
    console.log(`Moved to ${action.direction}`)
  }
  console.log(`Done in ${turn}`)
  return turn
}

function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length)
  return array[choice]
}

function randomRobot(state) {
  return { direction: randomPick(roadGraph[state.place]) }
}


runRobot(VillageState.random(), randomRobot)


function findRoute(graph, from, to) {
  let work = [{ at: from, route: [] }]
  for(let i = 0; i < work.length; i++) {
    let { at, route } = work[i]
    for(let place of graph[at]) {
      if(place == to) return route.concat(place)
      if(!work.some(w => w.at == place)) {
        work.push({ at: place, route: route.concat(place) })
      }
    }
  }
}
/**
A->F
B->D
C->A
D->A
D->E
E->D
**/