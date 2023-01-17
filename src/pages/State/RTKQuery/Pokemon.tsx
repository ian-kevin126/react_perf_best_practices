import { useGetPokemonByNameQuery } from "@/store/slices/PokemonSlice";

const Pokemon = ({
  name,
  pollingInterval,
}: {
  name: string;
  pollingInterval: number;
}) => {
  const { data, error, isLoading, isFetching } = useGetPokemonByNameQuery(
    name,
    {
      pollingInterval,
      skip: false, // skip为true的时候不请求数据
    }
  );

  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>
            {data.species.name} {isFetching ? "..." : ""}
          </h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null}
    </>
  );
};

export default Pokemon;
