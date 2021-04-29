export const Welcome = ({ name = "Lucy" }) => {
  return (
    <>
      <h2>Your wall, {name} </h2>
      <button>See timeline</button>
    </>
  );
};
