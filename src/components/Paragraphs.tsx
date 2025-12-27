import {readParagraphs} from "../services/readResources.ts";

function Paragraph(props: ParagraphDetails) {

    return (
        <div className="paragraph">
            <div className="paragraph-title">
                {props.title}
            </div>
            <div className="paragraph-content">
                {props.content}
            </div>
        </div>
    )

}

export function Paragraphs() {

    const paragraphs: ParagraphDetails[] = readParagraphs();

    return (
        <div className="paragraphs">
            {paragraphs.map((paragraph: ParagraphDetails, index: number) => {
                return <Paragraph key={paragraph.title || index} {...paragraph} />
            })}
        </div>
    );
}