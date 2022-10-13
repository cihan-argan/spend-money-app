function Header({ total, money }) {
  return (
    <>
      <div>
        {total > 0 &&  money-total !==0 && <div> Harcayacak {money - total} $ paranız kaldı</div>}
        {total === 0 && <div>Harcamak için {money - total} $ paranız var </div>}
        {money - total === 0 && <div> Paranız Bitti !!! </div>}
      </div>
    </>
  );
}
export default Header;
