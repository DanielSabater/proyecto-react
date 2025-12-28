export const PrimerComponente = ({titulo, subtitulo}) => {
  console.log (titulo)
  console.log (subtitulo)

  return (
    <>
      <h1>{titulo} </h1>
      <h1>{subtitulo +1}</h1>
    </>
  );
};
