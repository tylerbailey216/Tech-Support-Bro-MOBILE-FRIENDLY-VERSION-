(() => {
    const DECISION_TREE = {
        id: 'root',
        title: 'What do you need to fix?',
        summary: 'Choose a category to load a deterministic troubleshooting plan.',
        response: `Pick the area closest to your situation. Each branch gives you field-tested steps plus official resources you can watch offline later.`,
        tags: [],
        children: [
            {
                id: 'microsoft_windows',
                title: 'Microsoft · Windows',
                summary: 'Password resets, update loops, Teams calls.',
                response: `Start here for Windows PCs, Microsoft 365 accounts, or Teams meetings.`,
                tags: ['windows', 'office'],
                children: [
                    {
                        id: 'windows_power_boot',
                        title: 'Power & boot issues',
                        summary: 'Device will not start, batteries misbehave, or displays stay dark.',
                        response: `Pick the symptom that matches your Windows laptop or desktop.`,
                        tags: ['power', 'boot'],
                        children: [
                            {
                                id: 'computer_wont_turn_on',
                                title: 'Computer will not power on',
                                summary: 'No lights, no fans, totally dead.',
                                response: `1. Unplug accessories, hold the power button for 15 seconds to drain static, and plug the charger directly into a wall outlet.
2. Check the charger light and any chassis LEDs. Try a different outlet or adapter if nothing turns on. Reseat removable batteries.
3. Force a reset: hold the hardware power button for 20 seconds (Windows/Chromebook) or perform the SMC reset on Intel laptops (Shift + Control + Option + Power for 10 seconds).
4. If fans spin but the display stays dark, connect an external monitor or shine a flashlight at the panel to spot a faint image (backlight failure).
5. Document beep codes or LED flashes before contacting warranty support.`,
                        tags: ['power', 'hardware'],
                        links: [
                            { label: 'HP Support - PC won’t start', url: 'https://support.hp.com/us-en/document/c00006110' },
                            { label: 'Microsoft help video', url: 'https://www.youtube.com/watch?v=J3LJkSgEBrw' },
                        ],
                            },
                            {
                                id: 'battery_not_charging',
                                title: 'Battery not charging',
                                summary: '“Plugged in, not charging” or blinking battery light.',
                                response: `1. Confirm you are using the original wattage charger. Inspect the cable/port for damage and clean out lint with a wooden toothpick.
2. While on AC power, open Device Manager → Batteries → right-click “Microsoft ACPI-Compliant Control Method Battery” → Uninstall, then Action → Scan for hardware changes.
3. Update BIOS/firmware using the vendor utility (Lenovo Vantage, Dell Command, HP Support Assistant) and reboot on AC power.
4. If the battery charges only when the laptop is off, suspect a low-watt adapter or a failing battery cell.`,
                                tags: ['battery', 'charger'],
                                links: [
                                    { label: 'Dell Support video', url: 'https://www.youtube.com/watch?v=bwjcYyCneNc' },
                                ],
                            },
                           {
                                id: 'windows_update_refresh',
                                title: 'Run Windows Update',
                                summary: 'Cycle updates after a repair.',
                                response: `1. Open Settings → Windows Update and press “Check for updates.” Keep the PC plugged into AC power.
2. Install everything, restart, then run Windows Update again to catch cumulative patches.
3. If updates fail repeatedly, run the Update Troubleshooter (Settings → System → Troubleshoot → Other troubleshooters) and clear the SoftwareDistribution cache before trying once more.`,
                                tags: ['updates'],
                                links: [
                                    { label: 'Microsoft support article', url: 'https://support.microsoft.com/help/4027322/windows-10-get-help-with-windows-update-errors' },
                                    { label: 'Microsoft update fix video', url: 'https://www.youtube.com/watch?v=udsJGOEEjAQ' },
                                ],
                            },
                            {
                                id: 'onedrive_relink',
                                title: 'Sign out/in of OneDrive',
                                summary: 'Sync stuck or signing in under the wrong account.',
                                response: `1. Click the OneDrive cloud icon → Settings → Account → Unlink this PC.
2. Reopen OneDrive, sign in with the desired Microsoft account, and pick the folders you need offline.
3. Within the OneDrive settings, turn on Files On-Demand if you want space savings, or force full downloads if you need offline copies.`,
                                tags: ['onedrive', 'sync'],
                                links: [
                                    { label: 'OneDrive sync troubleshooting', url: 'https://support.microsoft.com/office/fix-onedrive-sync-problems-0899b115-05f7-45ec-95b2-d2e4fa70730' },
                                ],
                            },
                            {
                                id: 'black_screen',
                                title: 'Black screen / no display',
                                summary: 'Fans spin but nothing shows.',
                                response: `1. Verify monitor power, input selection, and cable seating. Try a different cable or port.
2. Desktop: remove the graphics card and connect to the motherboard video output to see if the GPU failed. Reseat RAM/GPU and test with one stick.
3. Laptop: shine a flashlight at the display—if you see a faint image, the backlight/inverter may be faulty.
4. Decode any beep or LED codes using the vendor manual to pinpoint failing components.`,
                                tags: ['display', 'hardware'],
                                links: [
                                    { label: 'Dell Support: no display', url: 'https://www.youtube.com/watch?v=Uhje3vFqlbo' },
                                ],
                            },
                        ],
                    },
                    {
                        id: 'performance_speed',
                        title: 'Performance & speed',
                        summary: 'Laptops feel slow, freeze, or run hot.',
                        response: `Pick the slowdown symptom you are fighting.`,
                        tags: ['performance'],
                        children: [
                            {
                                id: 'slow_computer',
                                title: 'Slow computer',
                                summary: 'General lag after updates or over time.',
                                response: `1. Press Ctrl + Shift + Esc to open Task Manager and sort by CPU/Memory/Disk to find runaway apps. End any suspicious processes.
2. Run “Clean up recommendations” (Settings → Storage) or “Disk Cleanup” on Windows 10 to free at least 15% storage.
3. Disable startup items you do not need (Task Manager → Startup apps) and remove heavy apps you rarely use.`,
                                tags: ['performance'],
                                links: [
                                    { label: 'Microsoft: Improve PC performance', url: 'https://support.microsoft.com/windows/tips-to-improve-pc-performance-in-windows-10-3d11d8d0-07a7-2bd3-75a7-5cbd8d9835b1' },
                                ],
                            },
                            {
                                id: 'freezing_lag',
                                title: 'Freezing / lagging',
                                summary: 'System hangs or apps stop responding.',
                                response: `1. Run Windows Memory Diagnostic (mdsched.exe) to check RAM; replace sticks if errors appear.
2. Update graphics and chipset drivers from the vendor site, then reboot.
3. Check Reliability Monitor for repeating app crashes and reinstall or repair those apps.`,
                                tags: ['stability'],
                                links: [
                                    { label: 'Microsoft: Fix freezes', url: 'https://support.microsoft.com/windows/fix-your-pc-freezing-or-crashing-7bb1f5b1-9b8b-5106-7a14-3bb8f18c0aa7' },
                                ],
                            },
                            {
                                id: 'overheating',
                                title: 'Overheating',
                                summary: 'Fans race, chassis feels hot.',
                                response: `1. Blow compressed air through vents while the laptop is OFF to clear dust. Elevate the rear or use a cooling pad.
2. Run vendor utilities (Lenovo Vantage, HP Command Center) to switch to a balanced/quiet thermal profile if max performance is not needed.
3. Ensure BIOS and firmware are current, then repaste or service the fans if temps remain excessive.`,
                                tags: ['thermal'],
                                links: [
                                    { label: 'HP Support: Laptop overheating', url: 'https://support.hp.com/us-en/document/c01657439' },
                                ],
                            },
                            {
                                id: 'battery_drains_fast',
                                title: 'Battery drains fast',
                                summary: 'Laptop will not last long unplugged.',
                                response: `1. Turn on Battery Saver (Settings → System → Power & battery) and drop screen brightness.
2. Close background apps in Task Manager and disable startup items you do not need.
3. Update BIOS/chipset drivers, then run the vendor battery health tool to see if the pack needs replacement.`,
                                tags: ['battery'],
                                links: [
                                    { label: 'Microsoft: Save battery life', url: 'https://support.microsoft.com/windows/tips-to-save-battery-life-in-windows-10-90c24b87-2a0b-4305-8284-8dd4996aeb3b' },
                                ],
                            },
                            {
                                id: 'fans_loud_constant',
                                title: 'Fans always loud',
                                summary: 'System sounds busy even when idle.',
                                response: `1. Check Task Manager for tasks pegging the CPU/GPU and close anything unnecessary.
2. Use Balanced or Quiet power modes in Windows/vendor utilities.
3. Clean vents with compressed air and keep the laptop on a hard surface for airflow.`,
                                tags: ['fans', 'thermal'],
                                links: [
                                    { label: 'Dell: Reduce fan noise', url: 'https://www.dell.com/support/kbdoc/en-us/000132421/fan-noise-is-loud' },
                                ],
                            },
                        ],
                    },
                    {
                        id: 'connectivity_network',
                        title: 'Wi-Fi & network',
                        summary: 'Stay online at home or on the go.',
                        response: `Resolve dropped or missing network connections with these quick branches.`,
                        tags: ['network', 'wifi'],
                        children: [
                            {
                                id: 'wifi_cant_connect',
                                title: 'Wi-Fi will not connect',
                                summary: 'Password ok but Windows refuses to join.',
                                response: `1. Toggle Airplane mode on then off and restart the PC.
2. Forget the Wi-Fi network (Settings → Network & internet → Wi-Fi) and reconnect with the password.
3. Reboot the router/modem and ensure the SSID is broadcasting on 2.4 GHz or 5 GHz as needed.`,
                                tags: ['wifi'],
                                links: [
                                    { label: 'Microsoft: Fix Wi-Fi connection issues', url: 'https://support.microsoft.com/windows/fix-wi-fi-connection-issues-in-windows-10-130a4b64-5a82-4526-bf74-9896b4c3d3d3' },
                                ],
                            },
                            {
                                id: 'wifi_drops_frequently',
                                title: 'Wi-Fi keeps dropping',
                                summary: 'Connection cuts out every few minutes.',
                                response: `1. Move closer to the router and keep the laptop away from microwaves or thick walls.
2. Update the Wi-Fi adapter driver via Device Manager, then restart Windows.
3. Restart the router; if multiple devices drop, change the wireless channel or split the 2.4/5 GHz bands.`,
                                tags: ['wifi'],
                                links: [
                                    { label: 'Microsoft: Fix network connection issues', url: 'https://support.microsoft.com/windows/fix-network-connection-issues-in-windows-11-166a28c4-14c1-47fd-a1d4-0b1b04db62ad' },
                                ],
                            },
                            {
                                id: 'ethernet_not_working',
                                title: 'Ethernet not working',
                                summary: 'Cable plugged in but no internet.',
                                response: `1. Try another Ethernet cable and port on the router/switch.
2. In Settings → Network & internet → Advanced network settings, disable then enable the Ethernet adapter.
3. Update the network driver from the PC/motherboard vendor and reboot.`,
                                tags: ['network'],
                                links: [
                                    { label: 'Microsoft: Fix Ethernet problems', url: 'https://support.microsoft.com/windows/fix-network-connection-issues-in-windows-11-166a28c4-14c1-47fd-a1d4-0b1b04db62ad' },
                                ],
                            },
                        ],
                    },
                    {
                        id: 'input_devices',
                        title: 'Mouse, keyboard, touchpad',
                        summary: 'When basic input quits.',
                        response: `Fix unresponsive accessories and sticky toggles.`,
                        tags: ['input'],
                        children: [
                            {
                                id: 'mouse_keyboard_not_working',
                                title: 'Mouse or keyboard stops responding',
                                summary: 'Either wired or wireless.',
                                response: `1. Replug the USB receiver/cable or replace wireless batteries.
2. Try a different USB port and restart the PC.
3. In Device Manager, uninstall the HID device and Scan for hardware changes to reload drivers.`,
                                tags: ['input'],
                                links: [
                                    { label: 'Microsoft: Troubleshoot keyboard and mouse', url: 'https://support.microsoft.com/windows/troubleshoot-keyboard-and-mouse-problems-188aef95-4e93-3f03-7c60-12ce3e419d8d' },
                                ],
                            },
                            {
                                id: 'touchpad_not_working',
                                title: 'Touchpad not working',
                                summary: 'Cursor frozen on laptops.',
                                response: `1. Press the touchpad enable/disable hotkey (often Fn + F6/F7) to ensure it is on.
2. Go to Settings → Bluetooth & devices → Touchpad and toggle it off/on.
3. Update the touchpad driver from the laptop vendor.`,
                                tags: ['touchpad'],
                                links: [
                                    { label: 'Microsoft: Fix touchpad problems', url: 'https://support.microsoft.com/windows/fix-touchpad-problems-in-windows-11-10-8e8f9a2d-0b4a-621c-a226-d7b316df8e90' },
                                ],
                            },
                            {
                                id: 'sticky_keys_stuck',
                                title: 'Sticky Keys stuck on',
                                summary: 'Popup keeps appearing or keys act odd.',
                                response: `1. Press Shift five times to toggle Sticky Keys off.
2. Settings → Accessibility → Keyboard: turn off Sticky, Filter, and Toggle Keys.
3. Restart the PC if keys still act locked.`,
                                tags: ['accessibility'],
                                links: [
                                    { label: 'Microsoft: Turn off Sticky Keys', url: 'https://support.microsoft.com/windows/turn-off-sticky-keys-74b1f0ce-4761-2ad6-7b80-3569d5932ec7' },
                                ],
                            },
                            {
                                id: 'usb_drive_not_opening',
                                title: 'USB drive will not open',
                                summary: 'Drive letter missing or access denied.',
                                response: `1. Try another USB port and a second PC to confirm the drive works.
2. Open Disk Management to assign a new drive letter.
3. Run Error Checking from File Explorer → drive Properties → Tools.`,
                                tags: ['usb'],
                                links: [
                                    { label: 'Microsoft: Windows can't find USB device', url: 'https://support.microsoft.com/windows/what-to-do-if-windows-11-or-windows-10-can-t-find-a-usb-device-ceddd7a6-1ef0-adaa-0f19-013ba6c2b4cf' },
                                ],
                            },
                        ],
                    },
                    {
                        id: 'bluetooth_audio_devices',
                        title: 'Bluetooth & audio gear',
                        summary: 'Pairing issues or audio lag.',
                        response: `Keep earbuds and speakers connected without delay.`,
                        tags: ['bluetooth', 'audio'],
                        children: [
                            {
                                id: 'bluetooth_not_pairing_simple',
                                title: 'Bluetooth will not pair',
                                summary: 'Devices cannot find each other.',
                                response: `1. Turn Bluetooth off/on on both devices and remove the device from Bluetooth settings before re-pairing.
2. Keep gadgets within a meter and away from 2.4 GHz interference.
3. Update Bluetooth drivers from the PC vendor and reboot.`,
                                tags: ['bluetooth'],
                                links: [
                                    { label: 'Microsoft: Fix Bluetooth problems', url: 'https://support.microsoft.com/windows/fix-bluetooth-problems-in-windows-10-0b7d4674-8109-59b7-b0f4-88fcd9a80604' },
                                ],
                            },
                            {
                                id: 'headphones_not_recognized',
                                title: 'Headphones not recognized',
                                summary: 'Plugged in but no audio.',
                                response: `1. Plug in the headset firmly, then choose it from the sound output list.
2. Disable audio enhancements under Sound settings.
3. For USB headsets, reinstall the device driver via Device Manager.`,
                                tags: ['audio'],
                                links: [
                                    { label: 'Microsoft: Fix sound problems', url: 'https://support.microsoft.com/windows/fix-sound-problems-in-windows-10-73025246-b61c-40fb-671a-2535a0c59a8d' },
                                ],
                            },
                            {
                                id: 'bluetooth_audio_lag',
                                title: 'Bluetooth audio lag',
                                summary: 'Sound delayed behind video.',
                                response: `1. Disconnect and reconnect the headset, keeping only one paired at a time.
2. Disable “Hands-Free Telephony” under device Services to force high-quality audio.
3. Update Bluetooth and audio drivers, then reboot.`,
                                tags: ['bluetooth', 'audio'],
                                links: [
                                    { label: 'Microsoft: Fix Bluetooth audio', url: 'https://support.microsoft.com/windows/fix-bluetooth-problems-in-windows-10-0b7d4674-8109-59b7-b0f4-88fcd9a80604' },
                                ],
                            },
                        ],
                    },
                    {
                        id: 'sound_voice',
                        title: 'Sound & microphone',
                        summary: 'Pick the right speakers or mic.',
                        response: `Get audio routed to the device you expect.`,
                        tags: ['audio'],
                        children: [
                            {
                                id: 'audio_wrong_device',
                                title: 'Audio plays through wrong device',
                                summary: 'Sound comes from the monitor or nowhere.',
                                response: `1. Click the speaker icon and choose the correct output.
2. Settings → System → Sound → More sound settings: set the default speaker.
3. Unplug/replug HDMI/USB audio devices to refresh Windows’ order.`,
                                tags: ['audio'],
                                links: [
                                    { label: 'Microsoft: Choose sound output', url: 'https://support.microsoft.com/windows/fix-sound-problems-in-windows-10-73025246-b61c-40fb-671a-2535a0c59a8d' },
                                ],
                            },
                            {
                                id: 'no_sound_windows',
                                title: 'No sound at all',
                                summary: 'Windows is completely silent.',
                                response: `1. Check keyboard mute keys and ensure the speaker icon is not muted.
2. Run the Playing Audio troubleshooter (Settings → System → Troubleshoot).
3. Reinstall the audio driver from the PC vendor and reboot.`,
                                tags: ['audio'],
                                links: [
                                    { label: 'Microsoft: Fix sound problems', url: 'https://support.microsoft.com/windows/fix-sound-problems-in-windows-10-73025246-b61c-40fb-671a-2535a0c59a8d' },
                                ],
                            },
                            {
                                id: 'microphone_not_working_simple',
                                title: 'Microphone not working',
                                summary: 'Apps cannot hear you.',
                                response: `1. Settings → Privacy & security → Microphone: allow desktop apps.
2. Choose the correct input device under Sound settings.
3. Disable exclusive mode in the device Properties and restart the app.`,
                                tags: ['microphone'],
                                links: [
                                    { label: 'Microsoft: Fix microphone problems', url: 'https://support.microsoft.com/windows/fix-microphone-problems-in-windows-10-5281a610-0b54-40d0-91c6-31b1c972921f' },
                                ],
                            },
                        ],
                    },
                    {
                        id: 'camera_printer_usb',
                        title: 'Camera, printers, sharing',
                        summary: 'Peripherals that refuse to cooperate.',
                        response: `Work through webcam, printer, and sharing annoyances.`,
                        tags: ['peripherals'],
                        children: [
                            {
                                id: 'webcam_not_detected_simple',
                                title: 'Webcam not detected',
                                summary: 'Missing in Teams/Zoom.',
                                response: `1. Close other apps that might own the camera, then reopen your meeting app.
2. Settings → Privacy & security → Camera → allow desktop apps.
3. Update or reinstall the camera driver from the laptop vendor.`,
                                tags: ['camera'],
                                links: [
                                    { label: 'Microsoft: Fix camera issues', url: 'https://support.microsoft.com/windows/fix-camera-issues-in-windows-10-9b962bde-5efe-2d5c-2fdf-4e0f3ee8005a' },
                                ],
                            },
                            {
                                id: 'printer_offline_simple',
                                title: 'Printer offline',
                                summary: 'Jobs stuck in queue.',
                                response: `1. Power-cycle the printer and PC, ensuring both share the same Wi-Fi network.
2. Settings → Bluetooth & devices → Printers: set your printer as default and clear the queue.
3. Reinstall the printer using the vendor utility (HP Smart, Epson, Canon).`,
                                tags: ['printer'],
                                links: [
                                    { label: 'Microsoft: Fix printer problems', url: 'https://support.microsoft.com/windows/fix-printer-problems-in-windows-10-7b83c39d-38c8-793a-4f20-0a94f5f4bf48' },
                                ],
                            },
                            {
                                id: 'password_prompt_loop',
                                title: 'Password prompt loop when printing/sharing',
                                summary: 'Windows keeps asking for credentials.',
                                response: `1. Remove saved credentials for the printer/share from Credential Manager.
2. Re-add the printer with the correct username/password.
3. Restart the Print Spooler service if prompts continue.`,
                                tags: ['printer'],
                                links: [
                                    { label: 'Microsoft: Printer connection troubleshooting', url: 'https://support.microsoft.com/windows/fix-printer-connection-and-printing-problems-in-windows-10-4529aeea-0c0c-4671-6f0a-94fbf26d4b8a' },
                                ],
                            },
                        ],
                    },
                    {
                        id: 'display_personalization',
                        title: 'Display & personalization',
                        summary: 'Brightness, wallpaper, and screen behavior.',
                        response: `Tidy up how the screen looks and behaves.`,
                        tags: ['display'],
                        children: [
                            {
                                id: 'auto_brightness_annoying',
                                title: 'Auto brightness too aggressive',
                                summary: 'Screen constantly dims.',
                                response: `1. Settings → System → Display: turn off “Change brightness automatically”.
2. Update the graphics driver and restart.
3. Disable adaptive brightness in the vendor utility (Dell, Lenovo, HP).`,
                                tags: ['display'],
                                links: [
                                    { label: 'Microsoft: Change screen brightness', url: 'https://support.microsoft.com/windows/change-screen-brightness-in-windows-10-1ff7668f-4f28-0c94-6311-3f1ad7ed2d0c' },
                                ],
                            },
                            {
                                id: 'external_monitor_missing',
                                title: 'External monitor not detected',
                                summary: 'Second screen stays blank.',
                                response: `1. Press Win + P and pick Duplicate or Extend.
2. Reseat HDMI/DisplayPort cables and power cycle the monitor.
3. Update graphics drivers and reboot.`,
                                tags: ['display'],
                                links: [
                                    { label: 'Microsoft: Fix connections to external displays', url: 'https://support.microsoft.com/windows/fix-connection-to-external-monitors-6a2f44b3-da37-4c2f-0ec3-73307f9719b6' },
                                ],
                            },
                            {
                                id: 'screen_rotation_stuck',
                                title: 'Screen rotation stuck',
                                summary: 'Tablet mode locked at wrong angle.',
                                response: `1. Toggle Rotation Lock in the Action Center.
2. Restart the PC or detach/reattach the keyboard on 2-in-1s.
3. Update sensor drivers from the device manufacturer.`,
                                tags: ['display'],
                                links: [
                                    { label: 'Microsoft: Rotate the screen', url: 'https://support.microsoft.com/windows/unlock-screen-rotation-9d47fa07-63f2-97a4-0e5e-2dba81ef0b0a' },
                                ],
                            },
                            {
                                id: 'night_light_not_working',
                                title: 'Night light not working',
                                summary: 'Blue light filter never turns on.',
                                response: `1. Toggle Night light off/on and adjust the strength slider.
2. Disable conflicting HDR or third-party color apps.
3. Update graphics drivers and restart Windows.`,
                                tags: ['display'],
                                links: [
                                    { label: 'Microsoft: Use Night light', url: 'https://support.microsoft.com/windows/use-night-light-in-windows-10-97e21b6f-572a-1bfb-6a5f-1e15559b1fd6' },
                                ],
                            },
                            {
                                id: 'screensaver_wont_turn_off',
                                title: 'Screensaver will not turn off',
                                summary: 'Kicks in while you are active.',
                                response: `1. Settings → Personalization → Lock screen → Screen saver: set to None or increase wait time.
2. Check for stuck keys or controllers triggering idle.
3. Update graphics drivers if the display keeps blanking.`,
                                tags: ['personalization'],
                                links: [
                                    { label: 'Microsoft: Change screen saver', url: 'https://support.microsoft.com/windows/change-the-screen-saver-5fba0e17-5ab0-dc2b-4f53-5b8bcb0d13d3' },
                                ],
                            },
                            {
                                id: 'cant_change_wallpaper',
                                title: 'Cannot change wallpaper',
                                summary: 'Options greyed out.',
                                response: `1. Ensure Windows is activated (Settings → System → Activation).
2. Settings → Personalization → Background: choose Picture and browse to the file.
3. Remove any “Prevent changing wallpaper” policy if the PC is self-managed.`,
                                tags: ['personalization'],
                                links: [
                                    { label: 'Microsoft: Change desktop background', url: 'https://support.microsoft.com/windows/change-your-desktop-background-wallpaper-13ea3bdc-28f0-6aae-0490-3f7a4c8508a9' },
                                ],
                            },
                        ],
                    },
                    {
                        id: 'storage_files',
                        title: 'Storage & file handling',
                        summary: 'Clear space and open files properly.',
                        response: `Tackle cramped drives and file association hiccups.`,
                        tags: ['storage', 'files'],
                        children: [
                            {
                                id: 'storage_almost_full',
                                title: 'Storage almost full',
                                summary: 'Drive in the red zone.',
                                response: `1. Run Storage Sense or Clean up recommendations (Settings → System → Storage).
2. Empty Downloads/Recycle Bin and move large files to an external drive or cloud.
3. Uninstall games/apps you no longer need from Settings → Apps.`,
                                tags: ['storage'],
                                links: [
                                    { label: 'Microsoft: Free up drive space', url: 'https://support.microsoft.com/windows/free-up-drive-space-in-windows-10-4d9ec0d3-5b76-4d2b-9c0a-4b6e9412c026' },
                                ],
                            },
                            {
                                id: 'cant_download_browser',
                                title: 'Browser will not download files',
                                summary: 'Downloads fail or vanish.',
                                response: `1. Check the browser’s download folder path and ensure it exists.
2. Temporarily disable SmartScreen/antivirus to test.
3. Reset the browser settings if downloads still fail.`,
                                tags: ['browser'],
                                links: [
                                    { label: 'Microsoft: Troubleshoot downloads in Edge', url: 'https://support.microsoft.com/microsoft-edge/troubleshoot-problems-downloading-files-from-the-internet-0577c1db-0b40-9d3c-efb0-6cdb7d17ec6a' },
                                ],
                            },
                            {
                                id: 'zip_wont_open',
                                title: 'ZIP file will not open',
                                summary: 'Windows reports errors.',
                                response: `1. Right-click the ZIP → Extract All to a new folder.
2. If Windows reports corruption, ask the sender to re-zip or use 7-Zip.
3. Avoid opening ZIPs directly from email—save locally first.`,
                                tags: ['files'],
                                links: [
                                    { label: 'Microsoft: Zip and unzip files', url: 'https://support.microsoft.com/windows/zip-and-unzip-files-8d28cc9f-0db7-0565-7465-6c07f3555c46' },
                                ],
                            },
                            {
                                id: 'file_association_wrong',
                                title: 'Wrong app opens files',
                                summary: 'Need to reset defaults.',
                                response: `1. Right-click the file → Open with → Choose another app → Always use.
2. Or go to Settings → Apps → Default apps and pick the program you prefer.
3. Reinstall the target app if nothing opens.`,
                                tags: ['files'],
                                links: [
                                    { label: 'Microsoft: Change default programs', url: 'https://support.microsoft.com/windows/change-default-programs-in-windows-10-e05fdce9-2551-1f6f-b0f2-43c0fda5bc26' },
                                ],
                            },
                        ],
                    },
                    {
                        id: 'apps_shell',
                        title: 'Apps, Explorer, and Start menu',
                        summary: 'Shell and Store annoyances.',
                        response: `Use these branches to fix the Windows interface quickly.`,
                        tags: ['apps'],
                        children: [
                            {
                                id: 'file_explorer_not_responding',
                                title: 'File Explorer not responding',
                                summary: 'Explorer hangs or crashes.',
                                response: `1. Press Ctrl + Shift + Esc, select Windows Explorer, and click Restart.
2. Clear Quick Access history from Folder Options.
3. Run “sfc /scannow” in an elevated Command Prompt if crashes persist.`,
                                tags: ['explorer'],
                                links: [
                                    { label: 'Microsoft: File Explorer help', url: 'https://support.microsoft.com/windows/file-explorer-in-windows-10-4ffb849c-40fb-aee2-ffa3-7e6f44fac510' },
                                ],
                            },
                            {
                                id: 'microsoft_store_install_fail',
                                title: 'Microsoft Store cannot install apps',
                                summary: 'Downloads stuck at pending.',
                                response: `1. Sign out/in of the Microsoft Store.
2. Run wsreset.exe to clear the cache.
3. Confirm the PC date/time is correct and storage is available.`,
                                tags: ['store'],
                                links: [
                                    { label: 'Microsoft: Troubleshoot Microsoft Store', url: 'https://support.microsoft.com/windows/troubleshoot-microsoft-store-apps-5c40f01b-73b3-4601-bf01-9b7a6b83b6ed' },
                                ],
                            },
                            {
                                id: 'store_icons_missing',
                                title: 'Store apps missing icons',
                                summary: 'Start menu tiles blank.',
                                response: `1. Reinstall the affected app from Microsoft Store.
2. Run the Windows Store Apps troubleshooter.
3. Rebuild the icon cache (delete IconCache.db) and restart.`,
                                tags: ['store'],
                                links: [
                                    { label: 'Microsoft: Troubleshoot Microsoft Store', url: 'https://support.microsoft.com/windows/troubleshoot-microsoft-store-apps-5c40f01b-73b3-4601-bf01-9b7a6b83b6ed' },
                                ],
                            },
                            {
                                id: 'taskbar_frozen',
                                title: 'Taskbar frozen or missing icons',
                                summary: 'Taskbar stops responding.',
                                response: `1. Restart Windows Explorer from Task Manager.
2. Disable third-party taskbar utilities.
3. Install pending Windows updates and reboot.`,
                                tags: ['taskbar'],
                                links: [
                                    { label: 'Microsoft: Fix taskbar problems', url: 'https://support.microsoft.com/windows/fix-problems-with-the-taskbar-1ef0ae93-f7a0-2dfa-0182-fd0b7c1d0f70' },
                                ],
                            },
                            {
                                id: 'start_menu_not_opening',
                                title: 'Start menu not opening',
                                summary: 'Button does nothing.',
                                response: `1. Sign out/in or restart the PC.
2. Run “sfc /scannow” from an elevated PowerShell window.
3. Test with a new local account; migrate if it works.`,
                                tags: ['start menu'],
                                links: [
                                    { label: 'Microsoft: Fix Start menu', url: 'https://support.microsoft.com/windows/fix-problems-with-start-menu-ce90e43d-c9a0-42a8-9f63-6de67eced18c' },
                                ],
                            },
                            {
                                id: 'cortana_search_not_working',
                                title: 'Search or Cortana not finding files',
                                summary: 'Results stay blank.',
                                response: `1. Restart the Windows Search service.
2. Rebuild the search index (Control Panel → Indexing Options).
3. Update Windows to grab search fixes.`,
                                tags: ['search'],
                                links: [
                                    { label: 'Microsoft: Fix search problems', url: 'https://support.microsoft.com/windows/fix-search-issues-in-windows-10-061c6e21-46a0-5560-2a5b-9f71b7b8d882' },
                                ],
                            },
                            {
                                id: 'time_date_incorrect',
                                title: 'Time and date incorrect',
                                summary: 'Clock drifts or shows the wrong zone.',
                                response: `1. Right-click the clock → Adjust date/time → Sync now.
2. Turn on “Set time automatically” and “Set time zone automatically.”
3. If it still drifts, change the time server to time.windows.com or pool.ntp.org and sync again.`,
                                tags: ['time'],
                                links: [
                                    { label: 'Microsoft: Synchronize your clock', url: 'https://support.microsoft.com/windows/synchronizing-the-time-on-your-windows-device-33ee0c42-4b7b-99ed-8a2b-1ef1d3bed519' },
                                ],
                            },
                            {
                                id: 'too_many_notifications',
                                title: 'Too many notifications',
                                summary: 'Action Center overwhelmed.',
                                response: `1. Settings → System → Notifications: turn off noisy apps.
2. Enable Focus Assist during meetings/gaming.
3. Disable Windows tips and suggestions.`,
                                tags: ['notifications'],
                                links: [
                                    { label: 'Microsoft: Change notification settings', url: 'https://support.microsoft.com/windows/change-notification-settings-in-windows-10-1c6d33f8-0a6d-2d78-339e-8d8f7f5c2caa' },
                                ],
                            },
                            {
                                id: 'clipboard_history_not_working',
                                title: 'Clipboard history not working',
                                summary: 'Win + V does nothing.',
                                response: `1. Settings → System → Clipboard: turn Clipboard history on.
2. Sign into your Microsoft account if you want sync.
3. Restart Explorer/Windows to clear clipboard glitches.`,
                                tags: ['clipboard'],
                                links: [
                                    { label: 'Microsoft: Use Clipboard history', url: 'https://support.microsoft.com/windows/use-clipboard-history-in-windows-10-73e1fd05-5de3-8058-1b0b-660eeb513f0c' },
                                ],
                            },
                        ],
                    },
                    {
                        id: 'browser_email',
                        title: 'Browser & email cleanup',
                        summary: 'Keep web and mail friendly.',
                        response: `Optimise browsing and email without advanced tools.`,
                        tags: ['browser', 'email'],
                        children: [
                            {
                                id: 'browser_slow',
                                title: 'Edge/Chrome running slow',
                                summary: 'Tabs take forever.',
                                response: `1. Close unused tabs and extensions.
2. Clear cache/cookies (Settings → Privacy → Clear browsing data).
3. Reset the browser if speed does not return.`,
                                tags: ['browser'],
                                links: [
                                    { label: 'Microsoft: Improve browser performance', url: 'https://support.microsoft.com/microsoft-edge/microsoft-edge-running-slowly-39c5d64d-8155-d0a7-7731-50cdfc8a6d26' },
                                ],
                            },
                            {
                                id: 'browser_homepage_hijacked',
                                title: 'Browser homepage hijacked',
                                summary: 'Unknown search takes over.',
                                response: `1. Reset the browser to defaults.
2. Remove suspicious extensions.
3. Run Windows Security or Defender Offline scan to clean adware.`,
                                tags: ['browser'],
                                links: [
                                    { label: 'Microsoft: Remove pop-ups, redirects, malware', url: 'https://support.microsoft.com/windows/remove-pop-ups-ads-and-malware-from-windows-10-1884c2b1-231a-d744-1f4a-0a688b28ffa0' },
                                ],
                            },
                            {
                                id: 'outlook_not_syncing',
                                title: 'Outlook will not send/receive',
                                summary: 'Mail stuck in Outbox.',
                                response: `1. Toggle Work Offline → Work Online.
2. Re-enter the account password or reauthenticate MFA.
3. Repair the Outlook profile (File → Account Settings → Repair).`,
                                tags: ['email'],
                                links: [
                                    { label: 'Microsoft: Fix send/receive errors in Outlook', url: 'https://support.microsoft.com/office/fix-send-and-receive-errors-in-outlook-365-462f9d4a-11a3-4e25-8d7b-4b5b19a6d1ad' },
                                ],
                            },
                        ],
                    },
                    {
                        id: 'accounts_cloud',
                        title: 'Accounts, parental controls, backup',
                        summary: 'Stay signed in and in control.',
                        response: `Fix sign-in hiccups, cloud sync, and nagging reminders.`,
                        tags: ['accounts'],
                        children: [
                            {
                                id: 'microsoft_password_beginner',
                                title: 'Forgot Microsoft account password',
                                summary: 'Need to reset at account.live.com.',
                                response: `1. Visit https://account.live.com/password/reset and choose “I forgot my password.”
2. Enter the full account and pass the verification challenge.
3. Set a new password and update Outlook/OneDrive/Teams with it.`,
                                tags: ['accounts'],
                            },
                            {
                                id: 'onedrive_not_syncing_simple',
                                title: 'OneDrive not syncing',
                                summary: 'Cloud icon shows an error.',
                                response: `1. Pause syncing then resume from the OneDrive icon.
2. Confirm you are signed into the correct account and have free space.
3. Unlink this PC, sign back in, and choose your folders.`,
                                tags: ['onedrive'],
                            },
                            {
                                id: 'parental_controls_blocking',
                                title: 'Parental controls blocking sites',
                                summary: 'Family Safety too strict.',
                                response: `1. Log into family.microsoft.com and adjust the child’s web/content filters.
2. Temporarily grant more time or unblock specific sites.
3. Sync the child’s device so the new policy applies.`,
                                tags: ['family'],
                                links: [
                                    { label: 'Microsoft: Adjust Family Safety settings', url: 'https://support.microsoft.com/account-billing/set-up-screen-time-limits-for-your-child-0d40c3ef-0f85-d43b-8a5a-7c5aa7d29538' },
                                ],
                            },
                            {
                                id: 'backup_reminder_annoying',
                                title: 'Backup reminders annoying',
                                summary: 'Constant prompts for OneDrive/File History.',
                                response: `1. If you use OneDrive, let the initial backup finish or pause syncing.
2. Turn off File History/Backup in Settings if you do not plan to use it.
3. Schedule backups to an external drive so reminders become useful.`,
                                tags: ['backup'],
                                links: [
                                    { label: 'Microsoft: Back up your files', url: 'https://support.microsoft.com/windows/back-up-your-files-81348f62-6bcb-40cb-afc3-57ca9de9497d' },
                                ],
                            },
                        ],
                    },
                    {
                        id: 'win_update',
                        title: 'Windows update is stuck',
                        summary: 'Update loop, spinning dots, feature install fails.',
                        response: `1. Restart, plug the PC into power, and rerun Settings → Windows Update.
2. Run the Windows Update troubleshooter (Settings → System → Troubleshoot → Other troubleshooters).
3. Open Command Prompt (admin) and run:
   net stop wuauserv
   net stop bits
   del /s /q %windir%\\SoftwareDistribution\\*
   net start wuauserv
   net start bits
4. Reboot and try again. Use the Windows Update Assistant for big feature upgrades and keep 20 GB free.`,
                        tags: ['windows', 'updates'],
                        links: [
                            { label: 'Microsoft support article', url: 'https://support.microsoft.com/help/4027322/windows-10-get-help-with-windows-update-errors' }
                        ]
                    },
                    {
                        id: 'office_password',
                        title: 'Reset Microsoft / Office password',
                        summary: 'Account.live.com reset flow.',
                        response: `1. Browse to https://account.live.com/password/reset and choose “I forgot my password.”
2. Enter the full Microsoft account and pass the verification challenge.
3. Approve the Authenticator prompt or enter the SMS / backup email code. 
4. Set a new password, then update Outlook, Teams, and OneDrive on every device.
5. Generate new recovery codes and confirm 2FA methods before closing the page.`,
                        tags: ['microsoft', 'accounts'],
                        links: [
                            { label: 'Account recovery portal', url: 'https://account.live.com/password/reset' },
                            { label: 'Video guide', url: 'https://www.youtube.com/watch?v=ypvcvVp4Vqk' }
                        ]
                    },
                    {
                        id: 'teams_media',
                        title: 'Teams audio or camera not working',
                        summary: 'Pick the right mic / cam and clear cache.',
                        response: `1. In Teams, open Settings → Devices and pick the expected microphone, speaker, and camera. Use “Make a test call.”
2. Quit other apps that may be holding the devices (Zoom, OBS, browser tabs) and restart Teams.
3. Update Teams (three dots → Check for updates) and install pending Windows driver updates.
4. Clear Teams cache: fully quit, then delete %AppData%\\Microsoft\\Teams\\Cache before relaunching.`,
                        tags: ['teams', 'meetings'],
                        links: [
                            { label: 'Teams troubleshooting video', url: 'https://www.youtube.com/watch?v=Tzo3BLYgj3U' }
                        ]
                    }
                ]
            },
            {
                id: 'apple_ios_mac',
                title: 'Apple · iOS · macOS',
                summary: 'Apple ID, iPhone power, Mac performance.',
                response: `Use this lane for Apple ID recovery, iPhone that will not boot, or a Mac that feels slow/hot.`,
                tags: ['apple'],
                children: [
                    {
                        id: 'apple_id',
                        title: 'Forgot Apple ID password',
                        summary: 'iforgot.apple.com recovery.',
                        response: `1. Visit https://iforgot.apple.com/ and enter your Apple ID email or phone.
2. Approve prompts on trusted devices or enter the SMS / email code. Start account recovery if nothing is trusted.
3. Set a new password, sign back into iCloud / iTunes / App Store on every device.
4. Review Security → Trusted phone numbers and add a recovery key if needed.`,
                        tags: ['apple id', 'security'],
                        links: [
                            { label: 'Apple walkthrough (video)', url: 'https://www.youtube.com/watch?v=4w37whqIAJ0' }
                        ]
                    },
                    {
                        id: 'iphone_power',
                        title: 'iPhone or iPad will not power on',
                        summary: 'Force restart + charging checks.',
                        response: `1. Force restart: Volume Up → Volume Down → hold Side button until the Apple logo.
2. Charge with a known-good cable and brick for at least 15 minutes. Clean the Lightning/USB-C port with a soft pick.
3. If the screen stays black but you hear sounds, connect to a computer and restore with Finder/iTunes.
4. Still dead? Document drops or liquid. Prepare for battery or logic-board service.`,
                        tags: ['ios', 'power'],
                        links: [
                            { label: 'Apple support video', url: 'https://www.youtube.com/watch?v=bwjcYyCneNc' }
                        ]
                    },
                    {
                        id: 'mac_performance',
                        title: 'Mac running hot or slow',
                        summary: 'Safe Mode, Activity Monitor, updates.',
                        response: `1. Boot to Safe Mode (hold Shift at startup), log in, then restart normally to clear caches.
2. Open Activity Monitor → CPU/Memory to find runaway apps and force quit offenders.
3. Update macOS (System Settings → General → Software Update) and keep at least 15 GB free.
4. Reset NVRAM/SMC on Intel Macs or run Diagnostics to check for hardware faults.`,
                        tags: ['mac', 'performance'],
                        links: [
                            { label: 'Apple diagnostics article', url: 'https://support.apple.com/en-us/HT201262' }
                        ]
                    }
                ]
            },
            {
                id: 'android_google',
                title: 'Android · Google',
                summary: 'Charging, storage, account recovery.',
                response: `These paths cover Pixel/Android devices plus Google account safety.`,
                tags: ['android', 'google'],
                children: [
                    {
                        id: 'android_power',
                        title: 'Android phone/tablet will not charge',
                        summary: 'Force restart + port care.',
                        response: `1. Force restart (Power + Volume Down for ~20 seconds).
2. Inspect and clean the USB-C port. Try another cable/brick and a wall outlet.
3. Boot into Safe Mode (hold Power, then press-and-hold “Power off”) to rule out third-party apps.
4. Update Android and check Battery → Usage for rogue apps.`,
                        tags: ['android', 'power'],
                        links: [
                            { label: 'Google support: battery tips', url: 'https://support.google.com/android/answer/7664692' }
                        ]
                    },
                    {
                        id: 'google_account',
                        title: 'Google account recovery',
                        summary: 'accounts.google.com/signin/recovery',
                        response: `1. Go to https://accounts.google.com/signin/recovery and enter the email or phone tied to the account.
2. Answer as many prompts as you can (last password, recovery email, device used).
3. When access is restored, visit https://myaccount.google.com/security to review security alerts.
4. Add recovery phone/email, enable 2-Step Verification, and download backup codes.`,
                        tags: ['google', 'security'],
                        links: [
                            { label: 'Video walkthrough', url: 'https://www.youtube.com/watch?v=pvx6_FqfrwE' }
                        ]
                    },
                    {
                        id: 'android_storage',
                        title: 'Android storage is full',
                        summary: 'Files by Google cleanup.',
                        response: `1. Open Files by Google → Clean to remove cached media and duplicate downloads.
2. Move large photos/videos to cloud or SD card. Clear app caches for social and messaging apps.
3. Empty the trash in Photos/Drive and uninstall rarely used apps.
4. Keep 10–15% free for smooth OTA updates.`,
                        tags: ['android', 'storage'],
                        links: [
                            { label: 'Files by Google video', url: 'https://www.youtube.com/watch?v=lAnqp7VJ-c0' }
                        ]
                    }
                ]
            },
            {
                id: 'network_wifi',
                title: 'Network · Wi‑Fi',
                summary: 'Whole-home networking and routers.',
                response: `Pick this lane for outages, flaky mesh systems, or brand-new routers.`,
                tags: ['network'],
                children: [
                    {
                        id: 'wifi_down',
                        title: 'Home Wi‑Fi is down',
                        summary: 'Power-cycle ISP modem + router.',
                        response: `1. Unplug modem + router for 30 seconds. Power on modem, wait for solid lights, then power on the router.
2. Confirm only one router is assigning DHCP. Put ISP combo units into bridge mode when using your own router.
3. Forget + reconnect to the SSID on client devices and verify the correct password.
4. Update router firmware from the admin UI.`,
                        tags: ['network', 'wifi'],
                        links: [
                            { label: 'NETGEAR firmware guide', url: 'https://kb.netgear.com/23442/How-do-I-update-the-firmware-on-my-NETGEAR-router-with-a-web-browser' }
                        ]
                    },
                    {
                        id: 'wifi_dropping',
                        title: 'Wi‑Fi keeps dropping',
                        summary: 'Separate bands + optimize channels.',
                        response: `1. Place the router high/central and away from microwaves or mirrors.
2. Split 2.4 GHz and 5 GHz SSIDs; prefer 5 GHz near the router and 2.4 GHz for range/IoT.
3. Update router firmware and wireless drivers on laptops.
4. Consider a mesh system for multi-story homes.`,
                        tags: ['wifi'],
                        links: [
                            { label: 'TP-Link Deco playlist', url: 'https://www.youtube.com/playlist?list=PLW_5HFrpMZg9QJVdT1Tzm4NC-PbFY7NgI' }
                        ]
                    },
                    {
                        id: 'router_setup',
                        title: 'New router setup',
                        summary: 'Out-of-box hardening.',
                        response: `1. Connect modem → router WAN. Browse to the router UI (usually 192.168.0.1 or 192.168.1.1).
2. Change the admin password, set SSIDs for 2.4/5 GHz, and enable WPA2/WPA3.
3. Disable WPS, update firmware, then back up the config.
4. Assign static/reserved IPs for smart-home gear that must stay online.`,
                        tags: ['router'],
                        links: [
                            { label: 'Video: NETGEAR setup', url: 'https://www.youtube.com/watch?v=-wkSaOJi2k4' }
                        ]
                    }
                ]
            },
            {
                id: 'hardware_accessories',
                title: 'Hardware · Accessories',
                summary: 'Printers, webcams, Bluetooth peripherals.',
                response: `Use this branch for the tricky devices that live at the edges: printers, webcams, headsets, and Bluetooth earbuds.`,
                tags: ['peripherals'],
                children: [
                    {
                        id: 'printer_offline',
                        title: 'Printer shows offline',
                        summary: 'Power cycle + reinstall drivers.',
                        response: `1. Power cycle the printer and the computer/phone sending the job.
2. Make sure both share the same Wi‑Fi network or that the USB cable is snug.
3. Clear the print queue, reinstall using the vendor utility (HP Smart, Epson Connect, Canon IJ).
4. On Windows: Settings → Bluetooth & devices → Printers → disable “Let Windows manage my default printer” and pick the right one.`,
                        tags: ['printer'],
                        links: [
                            { label: 'HP support video', url: 'https://www.youtube.com/watch?v=kdCJdQ0kGFM' }
                        ]
                    },
                    {
                        id: 'webcam_missing',
                        title: 'Webcam not detected',
                        summary: 'Privacy + driver check.',
                        response: `1. Close other apps that might own the camera, then reopen the meeting app.
2. Windows: Settings → Privacy & security → Camera → allow desktop apps. macOS: System Settings → Privacy & Security → Camera.
3. Update or reinstall the camera driver/firmware.
4. Test a different USB port or cable, then try an external webcam to isolate hardware.`,
                        tags: ['webcam'],
                        links: [
                            { label: 'Microsoft support video', url: 'https://www.youtube.com/watch?v=Jv2d3Y17Sqs' }
                        ]
                    },
                    {
                        id: 'bluetooth_pairing',
                        title: 'Bluetooth device will not pair',
                        summary: 'Forget + re-add, clear interference.',
                        response: `1. Toggle Bluetooth off/on on both devices and “Forget” the accessory before pairing again.
2. Charge both devices and keep them within 1–2 meters during pairing.
3. Remove stale Bluetooth entries in Windows Device Manager (show hidden devices) and reboot.
4. Minimize 2.4 GHz interference (turn off microwaves, move away from routers) while pairing.`,
                        tags: ['bluetooth'],
                        links: [
                            { label: 'Microsoft fix video', url: 'https://www.youtube.com/watch?v=Jm9-sKMNfWc' }
                        ]
                    }
                ]
            }
        ]
    };

    const state = {
        history: []
    };

    const els = {
        path: document.getElementById('nodePath'),
        title: document.getElementById('nodeTitle'),
        summary: document.getElementById('nodeSummary'),
        response: document.getElementById('nodeResponse'),
        tags: document.getElementById('nodeTags'),
        links: document.getElementById('nodeLinks'),
        children: document.getElementById('nodeChildren'),
        backBtn: document.getElementById('backBtn'),
        restartBtn: document.getElementById('restartBtn'),
        copyPlanBtn: document.getElementById('copyPlanBtn'),
        startBtn: document.getElementById('startTree'),
        embedBtn: document.getElementById('copyEmbed'),
        embedCode: document.getElementById('embedCode'),
        panel: document.getElementById('treePanel')
    };

    const lineWrap = (text = '') => text.replace(/\s+/g, ' ').trim();

    // Convert URLs in text to clickable links
    const linkify = (text) => {
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        return text.replace(urlRegex, (url) => {
            return `<a href="${url}" target="_blank" rel="noopener" style="color: var(--accent); text-decoration: underline;">${url}</a>`;
        });
    };

    const formatBlock = (block) => {
        const lines = block.split('\n').map((line) => line.trim()).filter(Boolean);
        if (!lines.length) {
            return '';
        }
        const numbered = lines.every((line) => /^\d+\./.test(line));
        if (numbered) {
            const items = lines.map((line) => `<li>${line.replace(/^\d+\.\s*/, '')}</li>`).join('');
            return `<ol>${items}</ol>`;
        }
        const bulleted = lines.every((line) => line.startsWith('- '));
        if (bulleted) {
            const items = lines.map((line) => `<li>${line.replace(/^-\s*/, '')}</li>`).join('');
            return `<ul>${items}</ul>`;
        }
        return `<p>${lines.join(' ')}</p>`;
    };

    const formatResponse = (text = '') => {
        if (!text) {
            return '';
        }

        const lines = text
            .split('\n')
            .map((line) => line.trim())
            .filter(Boolean);

        const summary = [];
        const steps = [];
        let currentStep = null;

        lines.forEach((line) => {
            const match = line.match(/^(\d+)\.\s*(.+)/);
            if (match) {
                if (currentStep) {
                    steps.push(currentStep);
                }
                currentStep = {
                    index: match[1],
                    title: match[2],
                    detail: [],
                };
            } else if (currentStep) {
                currentStep.detail.push(line);
            } else {
                summary.push(line);
            }
        });

        if (currentStep) {
            steps.push(currentStep);
        }

        const summaryHtml = summary
            .map((para) => `<p class="plan-blurb">${linkify(para)}</p>`)
            .join('');

        const stepsHtml = steps.length
            ? `<div class="plan-grid">${steps
                  .map(
                      (step) => `<article class="plan-card">
                            <div class="plan-step">${step.index}</div>
                            <div class="plan-card-body">
                                <h3>${linkify(step.title)}</h3>
                                ${
                                    step.detail.length
                                        ? `<p>${linkify(step.detail.join(' '))}</p>`
                                        : ''
                                }
                            </div>
                        </article>`,
                  )
                  .join('')}</div>`
            : '';

        return summaryHtml + stepsHtml;
    };

    const getCurrentNode = () => state.history[state.history.length - 1];

    const render = () => {
        const node = getCurrentNode();
        // Use breadcrumb field if available, otherwise use title
        els.path.textContent = state.history.map((item) => item.breadcrumb || item.title).join(' / ');
        
        // Replace "Choose a Help Topic" with image (zoom: 40%, centered, with hover effects)
        if (node.title === 'Choose a Help Topic') {
            els.title.innerHTML = '<img src="./chooseahelptopic.png" alt="Choose a Help Topic" class="help-topic-image">';
        } else {
            els.title.textContent = node.title;
        }
        
        els.summary.textContent = node.summary || '';
        els.response.innerHTML = formatResponse(node.response || '');

        els.tags.innerHTML = '';
        (node.tags || []).forEach((tag) => {
            const badge = document.createElement('span');
            badge.className = 'node-tag';
            badge.textContent = tag;
            els.tags.appendChild(badge);
        });

        els.links.innerHTML = '';
        console.log('Adding links:', node.links);
        (node.links || []).forEach((link) => {
            const anchor = document.createElement('a');
            anchor.href = link.url;
            anchor.target = '_blank';
            anchor.rel = 'noopener';
            anchor.textContent = link.label || link.url;
            anchor.style.pointerEvents = 'auto';
            anchor.style.cursor = 'pointer';
            anchor.addEventListener('click', (e) => {
                console.log('Link clicked:', link.url);
            });
            els.links.appendChild(anchor);
            console.log('Added link:', link.label, link.url);
        });

        els.children.innerHTML = '';
        if (node.children && node.children.length) {
            node.children.forEach((child) => {
                const card = document.createElement('article');
                card.className = 'child-card';

                const title = document.createElement('h3');
                title.textContent = child.title;
                card.appendChild(title);

                if (child.summary) {
                    const summary = document.createElement('p');
                    summary.style.margin = '0';
                    summary.style.color = 'var(--text-muted)';
                    summary.textContent = child.summary;
                    card.appendChild(summary);
                }

                const button = document.createElement('button');
                button.type = 'button';
                button.textContent = 'Open plan';
                button.addEventListener('click', () => {
                    state.history.push(child);
                    render();
                });
                card.appendChild(button);

                els.children.appendChild(card);
            });
        } else {
            const done = document.createElement('div');
            done.style.padding = '16px';
            done.style.border = '1px dashed rgba(255,255,255,0.2)';
            done.style.borderRadius = '16px';
            done.style.color = 'var(--text-muted)';
            done.textContent = 'You are at a leaf in the tree. After trying the steps above, go back or restart to explore another path.';
            els.children.appendChild(done);
        }

        els.backBtn.disabled = state.history.length <= 1;
        els.restartBtn.disabled = state.history.length <= 1;
        els.copyPlanBtn.disabled = !node || !node.response;
    };

    const startTree = () => {
        state.history = [DECISION_TREE];
        render();
        els.panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    els.backBtn.addEventListener('click', () => {
        if (state.history.length > 1) {
            state.history.pop();
            render();
        }
    });

    els.restartBtn.addEventListener('click', () => {
        if (state.history.length) {
            state.history = [DECISION_TREE];
            render();
        }
    });

    els.copyPlanBtn.addEventListener('click', async () => {
        const node = getCurrentNode();
        if (!node) return;
        const text = [
            `Plan: ${node.title}`,
            node.summary ? `Summary: ${node.summary}` : '',
            '',
            node.response,
            '',
            ...(node.links || []).map((link) => `${link.label}: ${link.url}`)
        ]
            .filter(Boolean)
            .join('\n');
        try {
            await navigator.clipboard.writeText(text);
            els.copyPlanBtn.textContent = 'Copied!';
            setTimeout(() => (els.copyPlanBtn.textContent = 'Copy plan'), 1800);
        } catch (error) {
            alert('Clipboard is unavailable. Copy manually:\n\n' + text);
        }
    });

    els.startBtn.addEventListener('click', () => {
        startTree();
    });

    // Optional embed button (may not exist in all versions)
    if (els.embedBtn && els.embedCode) {
        els.embedBtn.addEventListener('click', async () => {
            const snippet = els.embedCode.textContent.trim();
            try {
                await navigator.clipboard.writeText(snippet);
                els.embedBtn.textContent = 'Snippet copied';
                setTimeout(() => (els.embedBtn.textContent = 'Copy snippet'), 1600);
            } catch (error) {
                alert('Clipboard is unavailable. Copy manually from the code block.');
            }
        });
    }

    // Initialize with a placeholder so the UI feels live even before first click.
    state.history = [{
        breadcrumb: "Tell 'G' What's Happening",
        title: 'Choose a Help Topic',
        summary: 'Click "Start troubleshooting" to begin.',
        response: 'Pick a lane above to load your first branch.'
    }];
    render();
})();

const initTabletInteraction = () => {
    console.log('Attempting to initialize tablet interaction...');
    
    const stage = document.getElementById('tabletStage');
    const model = document.getElementById('tabletModel');
    
    console.log('Stage element:', stage);
    console.log('Model element:', model);
    
    if (!stage || !model) {
        console.error('Tablet elements not found! Stage:', stage, 'Model:', model);
        console.log('Available elements with IDs:', Array.from(document.querySelectorAll('[id]')).map(el => el.id));
        return false;
    }
    
    console.log('Tablet elements found, setting up interaction...');
    
    // Check if elements are visible and interactive
    const stageRect = stage.getBoundingClientRect();
    const modelRect = model.getBoundingClientRect();
    console.log('Stage dimensions:', stageRect);
    console.log('Model dimensions:', modelRect);
    console.log('Stage computed style:', window.getComputedStyle(stage));
    console.log('Model computed style:', window.getComputedStyle(model));

    let rotationX = -8;
    let rotationY = 22;
    let isDragging = false;
    let lastMouseX = 0;
    let lastMouseY = 0;
    let idleTimer = null;
    let isAutoRotating = false;
    let autoRotateFrame = null;

    const applyTransform = () => {
        const transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
        model.style.transform = transform;
        console.log('Applied transform:', transform);
    };

    // Auto-rotate animation
    const autoRotate = () => {
        if (!isAutoRotating) return;
        
        rotationY += 0.3; // Slow rotation speed
        
        // Keep rotation in a reasonable range
        if (rotationY > 360) rotationY -= 360;
        
        applyTransform();
        autoRotateFrame = requestAnimationFrame(autoRotate);
    };

    const startAutoRotate = () => {
        if (isAutoRotating) return;
        console.log('Starting auto-rotate');
        isAutoRotating = true;
        autoRotate();
    };

    const stopAutoRotate = () => {
        if (!isAutoRotating) return;
        console.log('Stopping auto-rotate');
        isAutoRotating = false;
        if (autoRotateFrame) {
            cancelAnimationFrame(autoRotateFrame);
            autoRotateFrame = null;
        }
    };

    const resetIdleTimer = () => {
        stopAutoRotate();
        clearTimeout(idleTimer);
        idleTimer = setTimeout(() => {
            console.log('Idle detected, starting auto-rotate');
            startAutoRotate();
        }, 3000); // Start auto-rotate after 3 seconds of inactivity
    };

    let activePointerId = null;

    const handlePointerDown = (event) => {
        event.preventDefault();
        isDragging = true;
        activePointerId = event.pointerId;
        lastMouseX = event.clientX;
        lastMouseY = event.clientY;
        resetIdleTimer();
        document.body.style.cursor = 'grabbing';
        if (stage.setPointerCapture) {
            stage.setPointerCapture(activePointerId);
        }
    };

    const handlePointerMove = (event) => {
        if (!isDragging || event.pointerId !== activePointerId) {
            return;
        }
        const deltaX = event.clientX - lastMouseX;
        const deltaY = event.clientY - lastMouseY;
        rotationY += deltaX * 0.5;
        rotationX -= deltaY * 0.5;
        rotationX = Math.max(-45, Math.min(45, rotationX));
        applyTransform();
        lastMouseX = event.clientX;
        lastMouseY = event.clientY;
    };

    const handlePointerUp = (event) => {
        if (!isDragging || event.pointerId !== activePointerId) {
            return;
        }
        isDragging = false;
        document.body.style.cursor = '';
        activePointerId = null;
        if (stage.releasePointerCapture) {
            stage.releasePointerCapture(event.pointerId);
        }
        resetIdleTimer();
    };

    const dragTargets = [stage, model, ...stage.querySelectorAll('*')];
    dragTargets.forEach((element) => {
        element.addEventListener('pointerdown', handlePointerDown, { capture: true, passive: false });
    });

    stage.addEventListener('pointermove', handlePointerMove);
    stage.addEventListener('pointerup', handlePointerUp);
    stage.addEventListener('pointercancel', handlePointerUp);
    stage.addEventListener('pointerleave', (event) => {
        if (isDragging) {
            handlePointerUp(event);
        }
    });

    // Add hover effect when not dragging
    stage.addEventListener('mouseenter', () => {
        if (!isDragging) {
            stage.style.cursor = 'grab';
        }
        resetIdleTimer();
    });

    stage.addEventListener('mouseleave', () => {
        stage.style.cursor = '';
    });

    // Apply initial transform
    applyTransform();
    
    // Start the idle timer initially
    resetIdleTimer();
    
    console.log('Tablet interaction fully initialized with simple drag system and auto-rotate!');
    return true;
};

// Try to initialize immediately, then retry when DOM is loaded
if (document.readyState === 'loading') {
    console.log('DOM is still loading, waiting for DOMContentLoaded...');
    document.addEventListener('DOMContentLoaded', initTabletInteraction);
} else {
    console.log('DOM already loaded, initializing immediately...');
    initTabletInteraction();
}
