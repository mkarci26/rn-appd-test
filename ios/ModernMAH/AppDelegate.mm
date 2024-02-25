#import "AppDelegate.h"
#import "Orientation.h"
#import <AVFoundation/AVFoundation.h>
#import <React/RCTBundleURLProvider.h>
#import "RNSplashScreen.h"
#import <React/RCTLinkingManager.h>
#import <TrustKit/TrustKit.h>
#import "RNCConfig.h"

@implementation AppDelegate
- (BOOL)application:(UIApplication *)app openURL:(NSURL *)url
            options:(NSDictionary<UIApplicationOpenURLOptionsKey, id> *)options
{
  return [RCTLinkingManager application:app openURL:url options:options];
}

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"AppdTest";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};

  [[AVAudioSession sharedInstance] setCategory:AVAudioSessionCategoryPlayback error:nil];
   NSDictionary *trustKitConfig =
  @{
    kTSKSwizzleNetworkDelegates: @YES,
    kTSKPinnedDomains: @{
      [RNCConfig envFor:@"DOMAIN_NAME"] : @{
            kTSKIncludeSubdomains: @YES,
            kTSKEnforcePinning: @YES,
            kTSKDisableDefaultReportUri: @YES,
            kTSKPublicKeyHashes : @[
              [RNCConfig envFor:@"PUBLIC_KEY"],
              [RNCConfig envFor:@"BACKUP_PUBLIC_KEY"],
            ],
        },
    }};
  [TrustKit initSharedInstanceWithConfiguration:trustKitConfig];

  [super application:application didFinishLaunchingWithOptions:launchOptions];
  
  [RNSplashScreen show];

  return YES;
}

- (UIInterfaceOrientationMask)application:(UIApplication *)application supportedInterfaceOrientationsForWindow:(UIWindow *)window {
  return [Orientation getOrientation];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

/// This method controls whether the `concurrentRoot`feature of React18 is turned on or off.
///
/// @see: https://reactjs.org/blog/2022/03/29/react-v18.html
/// @note: This requires to be rendering on Fabric (i.e. on the New Architecture).
/// @return: `true` if the `concurrentRoot` feature is enabled. Otherwise, it returns `false`.
- (BOOL)concurrentRootEnabled
{
  return true;
}

@end
