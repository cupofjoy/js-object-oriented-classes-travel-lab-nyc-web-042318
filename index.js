class Driver {
  constructor(name, startDate){
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(endDate) {
    return endDate - this.startDate.getFullYear()
  }
}

class Route {
  constructor(start, end) {
    this.start = start
    this.end = end
  }

  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

    let startHorizontal = eastWest.indexOf(this.start["horizontal"])
    let endHorizontal = eastWest.indexOf(this.end["horizontal"])

    let horizontal = 0
    if (startHorizontal > endHorizontal) {
      horizontal = startHorizontal - endHorizontal
    } else {
      horizontal = endHorizontal - startHorizontal
    }

    let vertical = 0
    let startVertical = parseInt(this.start["vertical"])
    let endingVertical = parseInt(this.end["vertical"])
    if (startVertical > endingVertical) {
      vertical = startVertical - endingVertical
    } else {
      vertical = endingVertical - startVertical
    }

    return horizontal + vertical
  }

  estimatedTime(peakTime) {
    let blocks = this.blocksTravelled()
    if (peakTime) {
      return blocks/2
    } else {
      return blocks/3
    }
  }
}
