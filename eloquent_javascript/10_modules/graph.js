/** 01

Write a CommonJS module, based on the example from Chapter 7, that contains the
array of roads and exports the graph data structure representing them as roadGraph.
It should depend on a module ./graph, which exports a function buildGraph that is
used to build the graph. This function expects an array of two-element arrays
(the start and end points of the roads).

**/
export function buildGraph(edges) {
  let graph = Object.create(null)

  function addEdge(from, to) {
    if(graph[from] == null) {
      graph[from] = [to]
    } else {
      graph[from].push(to)
    }
  }

  for(let [from, to] of edges.map(r => r.split("-"))) {
    addEdge(from, to)
    addEdge(to, from)
  }
  return graph
}

// the above function can be imported as
//  import { buildGraph } from "./graph"






/** 03

The require function given earlier in this chapter supports this type of dependency
cycle. Can you see how it handles cycles? What would go wrong when a module in
a cycle does replace its default exports object?

**/

/** ANS: 
 It uses a global object called `require.cache` which maintains the list of
  modules already loaded. The scope of this object can be accessed even before 
  importing a new module. The `require` function does exactly that, it checks whether
  the module exists within the global cache.
  Example: Let's assume module A depends on module B & module B depends on module A
  Assuming that you'll run module A first. Here are the steps of execution

  1. require.cache = {}                                 // is empty in the beginning
  2. reads a.js & comes across the line `require('b')`  // require.cache = { 'module-b': { ... } }
  3. reads b.js & comes across the line `require('a')`  // require.cache = { 'module-b': { ... }, 'module-a': { ... } }
  4. continues reading a & executes module a

**/