export function drawAlertWindow(container: HTMLDivElement) {
  container.innerHTML = `
    <div
        class="modal_warning-body bg-primary rounded-2 position-relative p-3"
      >
        <h3 class="modal_warning-header">
          <i class="bi bi-exclamation-triangle-fill text-warning"></i> Внимание!
        </h3>
        <p>
          <strong>
            Для перехода на следующий вопрос, дайте ответ на текущий.
          </strong>
        </p>
      </div>
    `;
}
