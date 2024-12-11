import {
  TableauViz,
  SelectionUpdateType,
  TableauEventType,
} from 'https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js';

var viz = new TableauViz();
viz.src = "https://public.tableau.com/views/LivableDC/LivableD_C_";
$('#tableauViz').append(viz);