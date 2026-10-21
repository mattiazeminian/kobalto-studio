export default function PageMarkup({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
