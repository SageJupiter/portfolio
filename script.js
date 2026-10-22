const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');
navToggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});
document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));

const tabs = document.querySelectorAll('[data-role]');
const panels = document.querySelectorAll('.role-panel');
tabs.forEach(tab => tab.addEventListener('click', () => {
  tabs.forEach(item => { item.classList.remove('active'); item.setAttribute('aria-selected', 'false'); });
  panels.forEach(panel => panel.classList.remove('active'));
  tab.classList.add('active'); tab.setAttribute('aria-selected', 'true');
  document.getElementById(tab.dataset.role).classList.add('active');
}));

const details = {
  avondale: { title: 'Food Safety & Quality Auditor', copy: 'At Avondale Foods, I conduct routine quality and compliance audits, review technical records and support QMS improvement. My work includes investigating non-conformances, following CAPA actions through to documented closure, verifying inspection equipment and working closely with QA, Production and Technical teams.' },
  msc: { title: 'MSc Researcher', copy: 'For my Queen’s University Belfast thesis, I compared soil and animal-gut microbial communities using 16S rRNA and Oxford Nanopore sequencing. I extracted and quantified microbial DNA, processed sequencing data through EPI2ME and Galaxy NanoPlot, and used MicrobiomeAnalyst to interpret diversity and dietary patterns.' },
  radish: { title: 'Research Team Lead', copy: 'I led laboratory research into drought-stress responses in Raphanus sativus, coordinating team workflows and controlled experiments. The role included PEG 6000 and abscisic acid treatments, RNA isolation, RT-qPCR, and bioinformatics using BLAST, STRING, DAVID and Cytoscape.' }
};
const dialog = document.querySelector('#detail-dialog');
document.querySelectorAll('.detail-button').forEach(button => button.addEventListener('click', () => {
  const detail = details[button.dataset.detail];
  dialog.querySelector('h3').textContent = detail.title;
  dialog.querySelector('.dialog-copy').textContent = detail.copy;
  dialog.showModal();
}));
document.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
document.querySelector('#year').textContent = new Date().getFullYear();
