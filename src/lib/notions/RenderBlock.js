export const RenderBlock = block => {
  const { type, id } = block;
  const value = block[type];

  switch (type) {
    case 'paragraph':
      return (
        <p className="text">
          <Text text={value.rich_text} id={id} key={id} />
        </p>
      );

    case 'heading_1':
      return (
        <h1 className="heading1" id={value.rich_text[0].plain_text}>
          <Text text={value.rich_text} id={id} key={id} />
        </h1>
      );

    case 'heading_2':
      return (
        <h2 className="heading2" id={value.rich_text[0].plain_text}>
          <Text text={value.rich_text} id={id} key={id} />
        </h2>
      );

    case 'heading_3':
      return (
        <h3 className="heading3" id={value.rich_text[0].plain_text}>
          <Text text={value.rich_text} id={id} key={id} />
        </h3>
      );

    case 'bulleted_list_item':
    case 'numbered_list_item':
      return (
        <li className="list1">
          <Text text={value.rich_text} />
          {!!value.children && renderList(block)}
        </li>
      );

    case 'to_do':
      return <ToDo key={id} value={value} />;

    case 'toggle':
      return <Toggle key={id} value={value} />;

    case 'image':
      const imageSrc = value.type === 'external' ? value.external.url : value.file.url;
      const caption = value.caption.length ? value.caption[0].plain_text : '';
      return (
        <figure key={id}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="imgs" alt={caption} src={imageSrc} />
          {caption && <figcaption>{caption}</figcaption>}
        </figure>
      );
    case 'divider':
      return <hr className="hr" key={id} />;
    case 'quote':
      return (
        <blockquote key={id} className="blockquote">
          <Text text={value.rich_text} />
        </blockquote>
      );
    case 'code':
      return (
        <pre key={id}>
          <code className={`language-${value.language}`}>{value.rich_text[0].plain_text}</code>
        </pre>
      );
    case 'callout':
      return (
        <div className="callout" key={id}>
          <span className="callout-emoji">{value.icon.emoji}</span>
          <Text text={value.rich_text} />
        </div>
      );
    case 'bookmark':
      return (
        <a href={value.url} target="_brank">
          {value.caption[0].plain_text}
        </a>
      );

    default:
      return `Unsupported block (${type === 'unsupported' ? 'unsupported by Notion API' : type})`;
  }
};

const Text = ({ text, id }) => {
  if (!text) return null;

  return text.map((value, i) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value;

    return code ? (
      <span
        key={id + i}
        className={[
          'code',
          bold ? 'bold' : null,
          italic ? 'italic' : null,
          strikethrough ? 'strikethrough' : null,
          underline ? 'underline' : null,
        ].join(' ')}
        style={color !== 'default' ? { color } : {}}
      >
        {text.link ? (
          <a href={text.link.url} className="underline">
            <code>{text.content}</code>
          </a>
        ) : (
          <code>{text.content}</code>
        )}
      </span>
    ) : (
      <span
        key={id + i}
        className={[
          bold ? 'bold' : null,
          italic ? 'italic' : null,
          strikethrough ? 'strikethrough' : null,
          underline ? 'underline' : null,
        ].join(' ')}
        style={color !== 'default' ? { color } : {}}
      >
        {text.link ? (
          <a href={text.link.url} className="underline">
            {text.content}
          </a>
        ) : (
          text.content
        )}
      </span>
    );
  });
};

const renderList = block => {
  const { type } = block;
  const value = block[type];
  if (!value) return null;

  const isNumberedList = value.children[0].type === 'numbered_list_item';

  if (isNumberedList) {
    return <ol className="list2">{value.children.map(block => RenderBlock(block))}</ol>;
  }
  return <ul className="list3">{value.children.map(block => RenderBlock(block))}</ul>;
};

const ToDo = ({ id, value }) => {
  return (
    <div className="todo">
      <label htmlFor={id}>
        <input type="checkbox" id={id} defaultChecked={value.checked} /> <Text text={value.rich_text} />
      </label>
    </div>
  );
};

const Toggle = ({ value }) => {
  return (
    <details className="toggle">
      <summary>{value.rich_text[0].text.content}</summary>
      {value.children?.map(block => {
        if (block.type === 'paragraph') {
          return (
            <p>
              <Text key={block.id} text={block.paragraph.rich_text} id={block.id} />;
            </p>
          );
        }
      })}
    </details>
  );
};
