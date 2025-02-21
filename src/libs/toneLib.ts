import * as Tone from "tone";

export class ToneLib {
  public static synth = new Tone.Synth().toDestination()
  public static now = Tone.now()

  public static toneNow() {
    return Tone.now()
  }
}

