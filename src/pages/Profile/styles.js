import styled from "styled-components";

const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.primary_light};

  height: 100%;
  flex: 1;
  overflow-y: auto;
`;

export default Section;
