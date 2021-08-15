import styled from '@emotion/styled'

const TypesContainer = styled.div`
  display: flex;
  text-align: center;

  p {
    width: 80px;
    color: white;
    padding: 2px 0;
    border-radius: 5px;
  }

  .normal {
    background-color: rgba(168, 168, 120, 1);
  }

  .fire {
    background-color: rgba(240, 128, 48, 1);
  }

  .water {
    background-color: rgba(104, 144, 240, 1);
  }

  .grass {
    background-color: rgba(120, 200, 80, 1);
  }

  .electric {
    background-color: rgba(248, 208, 48, 1);
  }

  .ice {
    background-color: rgba(152, 216, 216, 1)
  }

  .fighting {
    background-color: rgba(192, 48, 40, 1)
  }

  .poison {
    background-color: rgba(160, 64, 160, 1)
  }

  .ground {
    background-color: rgba(225, 192, 104, 1)
  }

  .flying {
    background-color: rgba(168, 144, 240, 1)
  }

  .psychic {
    background-color: rgba(248, 88, 136, 1)
  }

  .bug {
    background-color: rgba(168, 184, 32, 1)
  }

  .rock {
    background-color: rgba(184, 160, 56, 1)
  }

  .ghost {
    background-color: rgba(112, 88, 152, 1)
  }

  .dark {
    background-color: rgba(112, 88, 72, 1);
  }

  .dragon {
    background-color: rgba(112, 56, 248, 1);
  }

  .steel {
    background-color: rgba(184, 184, 208, 1)
  }

  .fairy {
    background-color: rgba(240, 182, 188, 1)
  }
`

function Types(props) {
  const { data } = props

  return (
    <TypesContainer>
      {
        data.map((type, index) => (
          <p key={ index } className={ `${type.type.name} me-3` }>
            { type.type.name[0].toUpperCase() + type.type.name.slice(1) }
          </p>
        ))
      }
    </TypesContainer>
  )
}

export default Types