/*
  Warnings:

  - You are about to drop the `PokemonsOnTypes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UsersOnPokemons` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PokemonsOnTypes" DROP CONSTRAINT "PokemonsOnTypes_id_pokemon_fkey";

-- DropForeignKey
ALTER TABLE "PokemonsOnTypes" DROP CONSTRAINT "PokemonsOnTypes_id_type_fkey";

-- DropForeignKey
ALTER TABLE "UsersOnPokemons" DROP CONSTRAINT "UsersOnPokemons_id_pokemon_fkey";

-- DropForeignKey
ALTER TABLE "UsersOnPokemons" DROP CONSTRAINT "UsersOnPokemons_id_user_fkey";

-- DropTable
DROP TABLE "PokemonsOnTypes";

-- DropTable
DROP TABLE "UsersOnPokemons";

-- CreateTable
CREATE TABLE "_PokemonToType" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_PokemonToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PokemonToType_AB_unique" ON "_PokemonToType"("A", "B");

-- CreateIndex
CREATE INDEX "_PokemonToType_B_index" ON "_PokemonToType"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PokemonToUser_AB_unique" ON "_PokemonToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_PokemonToUser_B_index" ON "_PokemonToUser"("B");

-- AddForeignKey
ALTER TABLE "_PokemonToType" ADD CONSTRAINT "_PokemonToType_A_fkey" FOREIGN KEY ("A") REFERENCES "Pokemon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PokemonToType" ADD CONSTRAINT "_PokemonToType_B_fkey" FOREIGN KEY ("B") REFERENCES "Type"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PokemonToUser" ADD CONSTRAINT "_PokemonToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Pokemon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PokemonToUser" ADD CONSTRAINT "_PokemonToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
