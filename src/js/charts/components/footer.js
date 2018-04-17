import { select } from 'd3-selection';

export default function footer(container, obj) {

  let footerGroup;


  if (obj.source !== '' || obj.editable) {
    footerGroup = select(container)
      .append('div')
      .classed(`${obj.prefix}chart_source`, true);

    // hack necessary to ensure PDF fields are sized properly
    if (obj.exportable) {
      footerGroup.style('width', `${obj.exportable.width}px`);
    }

  }


  if (obj.note !== '' || obj.editable) {

    const footerTextNote = footerGroup.append('div')
      .attr('class', `${obj.prefix}chart_note-text`)
      .text(obj.note);

    if (obj.editable) {
      footerTextNote
        .attr('contentEditable', true)
        .classed('editable-chart_note', true);
    }

  }

  if (obj.source !== '' || obj.editable) {
    const footerText = footerGroup.append('div')
      .attr('class', `${obj.prefix}chart_source-text`)
      .text(obj.source);

    if (obj.editable) {
      footerText
        .attr('contentEditable', true)
        .classed('editable-chart_source', true);
    }

    obj.dimensions.footerHeight = footerGroup.node().getBoundingClientRect().height;

  }


  return {
    footerGroup: footerGroup
  };

}
