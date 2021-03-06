import styled from 'styled-components'
import theme from '../../utils/color'

const BlogContent = styled.section`
  color: ${props => theme(props.theme.main).postContent};
  max-width: 100%;
  h1,
  h2,
  h3,
  h4,
  h5 {
    color: ${props => theme(props.theme.main).postTitle};
  }
  blockquote {
    p {
      color: ${props => theme(props.theme.main).postContentCode};
    }
  }
  a {
    color: ${props => theme(props.theme.main).postContent};
  }
  p {
    code {
      margin: 0 0.15rem;
      color: ${props => theme(props.theme.main).postContentCode};
    }
  }
`
export default BlogContent
