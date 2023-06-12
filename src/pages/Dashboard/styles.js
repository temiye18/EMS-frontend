import styled from "styled-components";

const DashboardSection = styled.section`
  background-color: ${({ theme }) => theme.colors.primary_light};
  height: 100%;
  flex: 1;
  overflow-y: auto;
`;

export default DashboardSection;
