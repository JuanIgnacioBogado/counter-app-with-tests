import PropTypes from 'prop-types';
// import './styles.css'

export const FirstApp = ({ title, subtitle, name }) => (
  <>
    <h1 data-testid="test-title">{title}</h1>
    <p>{subtitle}</p>
    <p>{subtitle}</p>
    <p>{name}</p>
  </>
);

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

FirstApp.defaultProps = {
  // title: 'Calamardisimo Kempes',
  subtitle: 'Soy un subtitulo',
  name: 'Juan Ignacio'
};
