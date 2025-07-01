#import "SystemSettingsLite.h"
#import <UIKit/UIKit.h>
#import <AVFoundation/AVFoundation.h>

@implementation SystemSettingsLite

RCT_EXPORT_MODULE()

- (double)getVolume:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject {
  AVAudioSession *session = [AVAudioSession sharedInstance];
  [session setActive:YES error:nil];
  float volume = session.outputVolume;
  resolve(@(volume));
  return 0; // dummy return to satisfy signature
}

- (void)setVolume:(double)value resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject {
  // iOS does NOT allow programmatically setting system volume.
  reject(@"ERR_UNSUPPORTED", @"iOS does not allow setting system volume.", nil);
}

- (void)getBrightness:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject {
  CGFloat brightness = [UIScreen mainScreen].brightness;
  resolve(@(brightness));
}

- (void)setBrightness:(double)value resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject {
  [UIScreen mainScreen].brightness = (CGFloat)value;
  resolve(nil);
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params {
  return std::make_shared<facebook::react::NativeSystemSettingsLiteSpecJSI>(params);
}

@end