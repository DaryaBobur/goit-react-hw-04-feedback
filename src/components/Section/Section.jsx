import PropTypes from 'prop-types';
import { SectionFeedback } from './SectionStyled';

const Section = ({title, children}) => {
  return (
    <SectionFeedback>
        <h2 className="title">{title}</h2>
        {children}
    </SectionFeedback>
)
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,

}

export default Section;