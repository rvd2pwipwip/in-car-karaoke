# Appendix A - Safety Features
## Safety Measures for Moving Vehicles
In the development of our in-car karaoke app, a key focus has been to ensure the safety of all road users specifically when the vehicle is in motion. Recognizing the unique challenges posed by moving vehicles, we have implemented a series of safety measures designed to prevent driver distraction and promote responsible app usage under these conditions. These measures are crucial for maintaining compliance with road safety regulations and fostering a safe driving environment, while allowing full app functionality when the vehicle is parked.

In summary, the app may operate in three safety modes: 
- Lone Driver
- Passenger
- Parked

Each mode features a distinct set of functionalities, specifically adapted to the app's usage context and designed to adhere to safety regulations.

:::note
The implementation of the safety measures outlined may differ based on the system requirements of different Original Equipment Manufacturers (OEMs). Each OEM has unique guidelines that could influence app features, such as allowing QR code display for passengers while others may restrict it to enhance safety. These variations are crucial as they affect functionality and user experience across various territories, jurisdictions, vehicles and OEMs.
:::

The following appendix outlines the flowcharts for these safety measures, providing a clear visual representation of how the app functions differently when the vehicle is moving versus when it is stationary, with and without onboard passengers.

:::info
Note that, in and of itself, the [**Passenger App**](./Passenger%20App/Overview.md) is primarily a safety feature, ingeniously designed to allow passengers to enjoy a complete karaoke experience with onscreen lyrics and song queue management on their personal devices. Prioritizing safety, the driver can participate and sing along, allowing them to stay focused on driving without onscreen distractions while passengers have acces to more features on their personal device.
:::


## Passenger Confirmation Dialog in Moving Vehicles

<img src="/img/level1Security.png" alt="Level 1 Security" width="500" style={{ marginRight: '20px', marginBottom: '20px' }} />

At startup, when the vehicle is in motion, users are presented with a dialog requiring them to confirm that they are passengers before they can access the app. This measure ensures that the driver is not distracted by the functionalities of the app while the vehicle is moving, restricting access to only those who are not operating the vehicle.
## Restricted Features for Drivers in Moving Vehicles
### Launch and Home
When the app detects that the vehicle is in motion, it automatically limits access to certain features to minimize distractions for the driver. In this mode, some features are disabled, such as, but not limited to: 
- **Song Queue display** 
- **Onscreen lyrics**
- **Onscreen keyboard**
- **Extensive browsing and navigation**

![Safety Flowchart](/img/safetyLevel3HomePlayer.png)

### Passenger
The [**Passenger**](./Screen%20Descriptions/Passenger.md) main menu item, which shows a prominent QR code for accessing the [**Passenger App**](./Passenger%20App/Overview.md), will be disabled if no passengers are present in the vehicle.


![Main Menu Passenger](/img/mainMenuPassenger.png)


### Search
The [**Search**](./Screen%20Descriptions/Search.md) input field's onscreen keyboard is blocked if there are no passengers in the vehicle.

![Search Keyboard](/img/searchOnscreenKbd.png)

### Info
Additionally, informational text screens are also restricted, such as:
- **FAQ**
- **About**
- **Contact Us**

![Main Menu Info](/img/mainMenuInfo.png)

:::info
If the vehicle is already moving and a passenger is detected, a dialog box will appear, prompting confirmation to switch the app from Lone Driver mode to Passenger mode, thereby enabling passenger features.
<img src="/img/passengerDetected.png" alt="Level 1 Security" width="300" style={{ marginRight: '20px', marginBottom: '20px' }} />
:::

<!-- ## Level 3: Automatic Detection of Driver Alone in Moving Vehicles
This level enhances the safety measures of [**Level 2**](#level-2-restricted-features-for-drivers-in-moving-vehicles) by incorporating technology that detects whether the driver is alone in the vehicle while it is in motion. If the app detects no passengers when it is launched, it restricts access to features that are deemed safe only when used by passengers. This automatic detection ensures that the safety protocols adapt based on the presence of passengers, allowing for responsible usage of the app’s features when the vehicle is moving. -->
## Common Feature Across All Levels for Moving Vehicles
In all scenarios, if the app is in driver-only mode and the vehicle is moving, any attempt to access a restricted feature will result in a toast notification displaying the message "Feature disabled while driving". This serves as a constant reminder and enforcement of the safety measures, ensuring that the driver remains focused on driving without distractions from the app.
These structured levels of safety implementations are specifically designed to adapt to various scenarios when the vehicle is moving, ensuring that both drivers and passengers can enjoy the karaoke experience without compromising on safety. When the vehicle is parked, all users have full access to the app, allowing for unrestricted enjoyment of its features.
