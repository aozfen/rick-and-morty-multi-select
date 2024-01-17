import ReactMarkdown from 'react-markdown'

interface ITitleMarkdown {
  value: string
  title: string
}

function TitleMarkdown(props: ITitleMarkdown) {
  const { value, title } = props 

  const formatTitleWithSearch = (title: string) => {
    const trimmedSearchValue = value.trim()

    if (trimmedSearchValue && title.toLowerCase().includes(trimmedSearchValue.toLowerCase())) {
      const titleIndex = title.toLowerCase().indexOf(trimmedSearchValue.toLowerCase());
      const boldTitle =
        title.substring(0, titleIndex) +
        '**' +
        title.substring(titleIndex, titleIndex + trimmedSearchValue.length) +
        '**' +
        title.substring(titleIndex + trimmedSearchValue.length);
      return <ReactMarkdown>{boldTitle}</ReactMarkdown>;
    }

    return title;
  }

  return (<span>{formatTitleWithSearch(title)}</span>)
}

export default TitleMarkdown
