import styled from '@emotion/styled'

const ListContainer = styled.div`
  height: 85vh;
  width: 100%;
  overflow: auto;
  display: grid;
  grid-auto-rows: 120px;

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    height: 77vh;
  }
`

export default ListContainer