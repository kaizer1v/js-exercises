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