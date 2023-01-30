import prisma from "../src/database/db.js";

async function main() {
  await prisma.user.create({
    data: {
      name: "Ash",
      pokemon: {
        create: {
          name: "Pikachu",
          weight: 6,
          types: {
            connectOrCreate: {
              where: { name: "Eletric" },
              create: { name: "Eletric" },
            },
          },
        },
      },
    },
  });

  await prisma.user.create({
    data: {
      name: "Misty",
      pokemon: {
        create: {
          name: "Togepi",
          weight: 6,
          types: {
            connectOrCreate: {
              where: { name: "Fairy" },
              create: { name: "Fairy" },
            },
          },
        },
      },
    },
  });

  await prisma.user.create({
    data: {
      name: "Brock",
      pokemon: {
        create: {
          name: "Onix",
          weight: 6,
          types: {
            connectOrCreate: [
              {
                where: { name: "Rock" },
                create: { name: "Rock" },
              },
              {
                where: { name: "Ground" },
                create: { name: "Ground" },
              },
            ],
          },
        },
      },
    },
  });

  await prisma.pokemon.create({
    data: {
      name: "Bulbasaur",
      weight: 6.9,
      types: {
        connectOrCreate: [
          {
            where: { name: "Grass" },
            create: { name: "Grass" },
          },
          {
            where: { name: "Poison" },
            create: { name: "Poison" },
          },
        ],
      },
    },
  });

  await prisma.pokemon.create({
    data: {
      name: "Ivysaur",
      weight: 14,
      types: {
        connectOrCreate: [
          {
            where: { name: "Grass" },
            create: { name: "Grass" },
          },
          {
            where: { name: "Poison" },
            create: { name: "Poison" },
          },
        ],
      },
    },
  });

  await prisma.pokemon.create({
    data: {
      name: "Charmander",
      weight: 14,
      types: {
        connectOrCreate: [
          {
            where: { name: "Fire" },
            create: { name: "Fire" },
          },
        ],
      },
    },
  });

  await prisma.pokemon.create({
    data: {
      name: "Charizard",
      weight: 14,
      types: {
        connectOrCreate: [
          {
            where: { name: "Fire" },
            create: { name: "Fire" },
          },
          {
            where: { name: "Flying" },
            create: { name: "Flying" },
          },
        ],
      },
    },
  });
}

main()
  .then(() => console.log("Pokemons and Trainers inserted successfully!"))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  })
  .finally(async () => {
    prisma.$disconnect();
  });
