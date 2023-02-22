//
//  VGSCardLabelManager.swift
//  AwesomeProject
//

import Foundation
import VGSShowSDK

@objc(VGSCardLabelManager)
class VGSCardLabelManager: RCTViewManager {

  static let contentPath = "data.number"

  @objc override static func requiresMainQueueSetup() -> Bool {
    return true
  }

  override func view() -> UIView! {
    let cardNumberLabel = VGSLabel()
    cardNumberLabel.placeholder = "Revealed Card Number"
    cardNumberLabel.paddings = .init(top: 8, left: 8, bottom: 8, right: 8)
    cardNumberLabel.contentPath = VGSCardLabelManager.contentPath
    
    /// Transfor revealed card number format
    let cardNumberPattern = "(\\d{4})(\\d{4})(\\d{4})(\\d{4})"
    let template = "$1 $2 $3 $4"
    // Use force try! here for sample.
    let regex = try! NSRegularExpression(pattern: cardNumberPattern, options: [])
    // Add transformation regex and template to your label.
    cardNumberLabel.addTransformationRegex(regex, template: template)
    
    CardShow.shared.show.subscribe(cardNumberLabel)
    return cardNumberLabel
  }
}

@objc(VGSCvvLabelManager)
class VGSCvvLabelManager: RCTViewManager {

  static let contentPath = "data.cvv2"

  @objc override static func requiresMainQueueSetup() -> Bool {
    return true
  }

  override func view() -> UIView! {
    let cvvLabel = VGSLabel()
    cvvLabel.placeholder = "Revealed CVV"
    cvvLabel.paddings = .init(top: 8, left: 8, bottom: 8, right: 8)
    cvvLabel.contentPath = VGSCvvLabelManager.contentPath
    CardShow.shared.show.subscribe(cvvLabel)
    return cvvLabel
  }
}

