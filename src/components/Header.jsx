import logoImg from '../assets/quiz-logo.png';

const Header = () => {
  return (
    <header>
        <img src={logoImg} alt="Test logo" />
        <h1>Test de Cultura General</h1>
    </header>
  );
}

export default Header;