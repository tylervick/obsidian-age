import { App, Modal, Setting } from 'obsidian';

export class OAModal extends Modal {
  constructor(app: App) {
    super(app);
  }

  onOpen(): void {
    this.contentEl.empty();

    new Setting(this.containerEl)
      .setName('Setting #1')
      .setDesc("It's a secret")
      .addText((text) =>
        text
          .setPlaceholder('Enter your secret')
          .setValue('Hellos')
          .onChange(async (value) => {
            console.log(value);
          }),
      );
  }
}
