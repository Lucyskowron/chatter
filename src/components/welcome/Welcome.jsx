export const Welcome = ({ name = "Lucy" }) => {
  return (
    <>
      <h2>Your wall, {name} </h2>
      <button>See timeline</button>
    </>
  );
};


// text needs to change depending on whether on wall or timeline pages
// probably break into two additional components?
