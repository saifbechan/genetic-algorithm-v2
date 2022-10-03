![Genetic Algorithm - Saif Bechan](https://user-images.githubusercontent.com/211370/194585509-f48fcb27-7ae2-470d-9691-34661c8e43a3.png)

# Genetic Algorithm 🧬

With the use of a genetic algorithm 🧬 ants 🐜 will find their way to a lemon 🍋 while avoiding viruses 🦠

#### Definitions

```bash
Population.Size >> the number of ants per generation
Population.Lifespan >> how long does a generation last

dna >> specifies the moves this ant will make
fitness >> specifies how well this ant performed
```

We start by creating a world and populate it with ants. Each ant starts with random `dna` and can only live a certain amount of time. When the time is over we will `evaluate` all the ants in the population and give them a `fitness` score. Based on this population we create a new `population` through `mating`. When creating a new population based on the previous `generation` there is also some `mutation` that takes place.

## Schema

![Genetic Algorithm Schema](https://user-images.githubusercontent.com/211370/194585164-fde35d3b-b859-4859-af93-c3936fa1a974.png)

## Code

The most important part of the application lives in `/game/sketch.ts`. It is in charge of creating our population and displaying them on the canvas.

## Installation

Make sure [node](https://nodejs.org) is installed on your system. Use package manager [yarn](https://yarnpkg.com/getting-started/install) to install the application.

```
yarn install
```

## Development

You can start the development server by running:

```
yarn dev
```

## Stack

There are various libraries and tools used to make this application work.

```shell
next.js >> creates the website with React
p5.js >> creates the visualization
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
